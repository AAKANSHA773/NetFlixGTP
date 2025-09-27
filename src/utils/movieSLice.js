import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie:null,
    trailerVideo:null,
    populerMovies:null
  },
  reducers: {
    addNowPlayingMovie: (state, action) => {
       state.nowPlayingMovie= action.payload;
    },
    addPopulerMovie: (state, action) => {
       state.populerMovies= action.payload;
    },
    addTrailerVideo: (state, action) => {
       state.trailerVideo= action.payload;
    },
    
  },
});

export const {addNowPlayingMovie, addTrailerVideo,addPopulerMovie}= movieSlice.actions
export default movieSlice.reducer
