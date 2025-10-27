import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
  name: "gtp",
  initialState: {
    showGptSearch: false,
    movieResults :null,
    movieNames:null
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGeminiMoviesResults:(state,action) =>{
      const {movieNames, movieResults} = action.payload
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    }
  },
});

export const { toggleGptSearchView ,addGeminiMoviesResults} = gtpSlice.actions;
export default gtpSlice.reducer;
