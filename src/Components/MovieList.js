import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  const movieList = movies || [];
  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-4 text-white ">{title}</h1>
      <div className= " flex overflow-x-scroll ">
        <div className="flex">
          {movieList?.map((movies) => (
            <MovieCard key={movies.id} posterPath={movies.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

{
  /* <h1 className="text-3xl py-6">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((e) => (
            <MovieCard posterPath={e.poster_path} />
          ))}
        </div>
      </div> */
}
