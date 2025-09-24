import useNowPlayingMOvies from "../hooks/useNowPlayingMovies";
import Header from "./Header";

const Browse = () => {
  useNowPlayingMOvies()
  
  return (
    <div>
      <Header />
      browse
    </div>
  );
};

export default Browse;
