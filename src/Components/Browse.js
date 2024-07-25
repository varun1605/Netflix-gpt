import React, { useEffect, useState } from "react";
import Header from "./Header";
// import { getMoviesOption } from "../utils/Constants";
// import { useDispatch } from "react-redux";
import { deleteUser } from "firebase/auth";
// import { addNowPlayingMovies } from "../utils/movieSlice";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  // const [showGptSearch,setShowGptSearch]=useState(false)
  useNowPlayingMovies();
  usePopularMovies();
  // const toggleGpt=()=>{
  //   setShowGptSearch(!showGptSearch)
  // }

  return (
    <div dis>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      {/* <Header toggleGpt={toggleGpt} />
      {showGptSearch && <GptSearch/>} */}
      {/*
        Main container
          -VideoBackground
          -VideoTitle

       SecondaryContainer
        -MovieList*n
          -Cards*n   
          
      */}
    </div>
  );
};

export default Browse;
