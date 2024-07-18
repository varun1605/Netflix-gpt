import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";
const MovieCard = ({posterPath}) => {
  return (
    <div className="w-40 p-1">
      <img src={IMG_CDN_URL+posterPath}></img>
    </div>
  );
};

export default MovieCard;
