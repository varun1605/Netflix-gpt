import React, { useEffect } from "react";
import Header from "./Header";
// import { getMoviesOption } from "../utils/Constants";
// import { useDispatch } from "react-redux";
import { deleteUser } from "firebase/auth";
// import { addNowPlayingMovies } from "../utils/movieSlice";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div dis>
      <Header />
      {/*
        Main container
          -VideoBackground
          -VideoTitle

       SecondaryContainer
        -MovieList*n
          -Cards*n   
          
      */}
      <MainContainer />
      {/* <SecondaryContainer /> */}
    </div>
  );
};

export default Browse;
