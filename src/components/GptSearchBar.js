import React from "react";
import { Form, useResolvedPath } from "react-router";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

    const langKey = useSelector(store=>store.config.lang)
  return (
    <div className="pt-[8%] flex justify-center">
      <form   className=" w-1/2 bg-black grid grid-cols-12 rounded-lg">
        <input
        className="p-4 m-4 col-span-9 rounded-lg"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button className=" col-span-3 py-2 m-4 px-4 bg-red-700 text-white rounded-lg ">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
