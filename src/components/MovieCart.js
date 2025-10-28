import React from "react";
import { IMAGECDNURL } from "../utils/constant";

const MovieCart = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4">
      <img alt="Movie Card" src={IMAGECDNURL + posterPath} />
    </div>
  );
};

export default MovieCart;
