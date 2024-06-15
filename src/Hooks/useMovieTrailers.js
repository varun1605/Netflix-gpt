import { useDispatch } from "react-redux";
import { getMoviesOption } from "../utils/Constants";
import { addMovieTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //fetch trailer of the movie and updating the data to the store
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      getMoviesOption
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type == "Trailer");

    //if the video api doesnt contain the trailer ,that means the length of the array is empty so in that case we are fetching the first video, it need not necesserly be type trailer
    const trailer = filterData.length ? filterData[0] : json.results[0];
    
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
