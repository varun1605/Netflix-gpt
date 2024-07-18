import { useDispatch } from "react-redux";
import {getMoviesOption} from "../utils/Constants"
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const usePopularMovies=()=>{
      const dispatch=useDispatch()

  //fetch data from tmbp movies api
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      getMoviesOption
    );  
    const json = await data.json();

    //This dispatch actually adds the movie data to the store and updates it. Later this is the only data that we use in our react components. To render. 
    
    dispatch(addPopularMovies(json.results))

    /* any time we try to render the console.log in our application we get the rendered data twice, this we have 
    observed, this happens because of the strict mode inside the react, basically it checks the component by rendering 
    it twice to check for any kind of inconsistencies, this only happens in local */
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
}
export default usePopularMovies;

