import { useDispatch } from "react-redux";
import {getMoviesOption} from "../utils/Constants"
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useNowPlayingMovies=()=>{
      const dispatch=useDispatch()

  //fetch data from tmbp movies api
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      getMoviesOption
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results))

    /* any time we try to render the console.log in our application we get the rendered data twice, this we have 
    observed, this happens because of the strict mode inside the react, basically it checks the component by rendering 
    it twice to check for any kind of inconsistencies, this only happens in local */
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}
export default useNowPlayingMovies;