import useNowPlayingMOvies from "../hooks/useNowPlayingMovies";
import usePopulerMovies from "../hooks/usePopulerMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMOvies()
  usePopulerMovies()
  
  return (
    <div>
      <Header />
      <MainContainer/>

      <SecondaryContainer/>
    </div>
  );
};

export default Browse;
