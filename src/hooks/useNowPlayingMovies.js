import  { useEffect } from "react";
import { API_OPTION } from "../utils/constant";
import { useDispatch,useSelector } from "react-redux";
import { addNowPlayingMovie } from "../utils/movieSLice";


const useNowPlayingMOvies =   ()=>{

 const dispatch = useDispatch();

 const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    );
    const json = await data.json();
    // console.log(json);
    dispatch(addNowPlayingMovie(json.results));
  };


  useEffect(() => {
    if(!nowPlayingMovies)
    getNowPlayingMovie();
  }, []);
}
export default useNowPlayingMOvies;