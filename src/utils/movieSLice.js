import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovie:null,
    trailerVideo:null,
    populerMovies:null,
    upcomingMovies:null,
    topratedMovies:null,
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
    addUpcomingMovie: (state, action) => {
       state.upcomingMovies= action.payload;
    },
    addTopratedMovies:(state,action) =>{
      state.topratedMovies = action.payload;
    }
  },
});

export const {addNowPlayingMovie, addTrailerVideo,addPopulerMovie,addUpcomingMovie,addTopratedMovies}= movieSlice.actions
export default movieSlice.reducer
