import React from "react";
import {useSelector } from "react-redux";
import { useParams } from "react-router";
import { IMAGECDNURL } from "../utils/constant";

const MovieDetails = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovie);
  const { id } = useParams();
  

  const flatMovies = movies ? movies.flat() : [];
  const movie = flatMovies.find((m) => m.id === Number(id));

  console.log("details", movie);

  const { original_title, overview, poster_path,release_date,vote_average } =
    movie;

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 p-6 md:p-12 bg-gradient-to-t from-black text-white">
 
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      alt="Movie Card"
      src={IMAGECDNURL + poster_path}
      className="rounded-lg shadow-lg w-[80%] md:w-[55%] "
    />
  </div>

  <div className="w-full md:w-1/2">
    <h1 className="text-3xl md:text-5xl font-bold mb-4">{original_title}</h1>
    <p className="text-lg md:text-xl text-gray-200 mb-6">{overview}</p>

    <div className="space-y-2 text-gray-300">
      <p><span className="font-semibold text-white">Release Date:</span> {release_date}</p>
      <p><span className="font-semibold text-white">Rating:</span> ⭐ {vote_average}</p>
    </div>
  </div>
</div>

  );
};

export default MovieDetails;
