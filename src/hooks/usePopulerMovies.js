import  { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch } from "react-redux";
import {  addPopulerMovie } from "../utils/movieSLice";


const usePopulerMovies =   ()=>{

 const dispatch = useDispatch();
  const getPopulerMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addPopulerMovie(json.results));
  };


  useEffect(() => {
    getPopulerMovies();
  }, []);
}
export default usePopulerMovies;