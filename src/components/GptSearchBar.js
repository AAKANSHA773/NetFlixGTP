import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { geminiModel } from "../utils/geminiAl";
import { API_OPTION } from "../utils/constant";
import { addGeminiMoviesResults } from "../utils/gtpSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch()

  const searchMoviesTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query= " +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };

  const hanldeGptSearchClick = async () => {
    console.log(searchText.current.value);
    const query = searchText.current.value;

    const prompt = `You are a movie recommendation system.
                  Suggest exactly 5 movies for the query: "
                  ${query}"
                  Only return movie names, comma-separated.`;

    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    const geminiMovies = response.text().split(",");
    console.log("Recommended Movies:", geminiMovies);

    const arrayData = geminiMovies.map((movie) => searchMoviesTMDB(movie));
    const tmdbResults = await Promise.all(arrayData)
    console.log(tmdbResults);
    dispatch(addGeminiMoviesResults({movieNames:geminiMovies,
                                     movieResults:tmdbResults}))

  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-1/2 bg-black grid grid-cols-12 rounded-lg"
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9 rounded-lg"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className=" col-span-3 py-2 m-4 px-4 bg-red-700 text-white rounded-lg "
          onClick={hanldeGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
