import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailers";

function VideoBackground(props) {
  const trailerVideoFromStore = useSelector(
    (store) => store.movies?.trailerVideo
  );

  //This is the custom hook that we have made for the sake of clean coding!
  useMovieTrailer(props.movieId);

  return (
    <div className="w-screen h-screen "> 
      <iframe
        className="w-screen aspect-video h-screen "
        src={"https://www.youtube.com/embed/" + trailerVideoFromStore?.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
