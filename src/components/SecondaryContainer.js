import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovie && (
      <div className="bg-black">
        <div className="-mt-40 pl-12 relative z-10">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie} />
        <MovieList title={"Trending"} movies={movies.nowPlayingMovie} />
        <MovieList title={"Populer"} movies={movies.populerMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovie} />
      </div></div>
    )
  );
};

export default SecondaryContainer;
