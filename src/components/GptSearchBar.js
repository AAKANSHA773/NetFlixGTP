import { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { geminiModel } from "../utils/geminiAl";
import { API_OPTION } from "../utils/constant";
import { addGeminiMoviesResults } from "../utils/gtpSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

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
    const query = searchText.current.value;

    const prompt = `You are a movie recommendation system.
                  Suggest exactly 5 movies for the query: "
                  ${query}"
                  Only return movie names, comma-separated.`;

    const result = await geminiModel.generateContent(prompt);
    const response = await result.response;
    const geminiMovies = response
      .text()
      .split(",")
      .map((m) => m.trim());

    const arrayData = geminiMovies.map((movie) => searchMoviesTMDB(movie));
    const tmdbResults = await Promise.all(arrayData);

    const exactlyMatches = tmdbResults.map((movie, index) => {
      const movieNAme = geminiMovies[index].toLowerCase();
      return movie.find((m) => m.title?.toLowerCase() === movieNAme);
    });
    
    dispatch(
      addGeminiMoviesResults({
        movieNames: geminiMovies,
        movieResults: exactlyMatches.map(m => m ? [m] : []),
      })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className=" p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={hanldeGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
