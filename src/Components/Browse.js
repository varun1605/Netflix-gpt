import React, { useEffect } from "react";
import Header from "./Header";
// import { getMoviesOption } from "../utils/Constants";
// import { useDispatch } from "react-redux";
import { deleteUser } from "firebase/auth";
// import { addNowPlayingMovies } from "../utils/movieSlice";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies"

const Browse = () => {
  useNowPlayingMovies()
  return (
    <div dis>
      <Header />
    </div>
  );
};

export default Browse;
