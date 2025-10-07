import { useSelector } from "react-redux";
import useNowPlayingMOvies from "../hooks/useNowPlayingMovies";
import usePopulerMovies from "../hooks/usePopulerMovies";
import GtpSearch from "./GtpSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMOvies();
  usePopulerMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GtpSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
