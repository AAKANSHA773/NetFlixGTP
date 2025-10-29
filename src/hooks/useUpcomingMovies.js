import  { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import {  addUpcomingMovie } from "../utils/movieSLice";


const useUpcomingMovies =   ()=>{
  const upcomingMovies = useSelector(store => store.movies.upcomingMovies)

 const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1' ,
      API_OPTION
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addUpcomingMovie(json.results));
  };


  useEffect(() => {
    if(!upcomingMovies)
    getUpcomingMovies();
  }, []);
}
export default useUpcomingMovies;