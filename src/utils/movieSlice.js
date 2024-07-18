import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingMovies: null, trailerVideo: null,popularMovies:null },
  reducers: {
    addPopularMovies:(state,action)=>{
      state.popularMovies=action.payload
    },
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieTrailer,addPopularMovies } = movieSlice.actions;
export default movieSlice.reducer;
