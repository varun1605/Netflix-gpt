import React from "react";
import { lang } from "../utils/languageConstants";
import {useSelector} from "react-redux"


const GptSearchBar = () => {
  const languageChange=useSelector(store=>store.config.lang)
  
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" bg-black p-4 m-4 w-1/2 grid grid-cols-12 rounded-lg">
        <input
          placeholder={lang[languageChange].gptSearchPlaceholder}
          type="text"
          className="p-3  col-span-9 m-1"
        ></input>
        <button className="bg-red-700 text-white col-span-3 py-2 px-4 m-1 rounded-lg">{lang[languageChange].search}</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
