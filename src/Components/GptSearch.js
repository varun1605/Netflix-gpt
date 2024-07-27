import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import {BACKGROUND_IMG_URL} from "../utils/Constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 ">
        <img
          src={BACKGROUND_IMG_URL}
          alt="BackgroundLogo"
        ></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
