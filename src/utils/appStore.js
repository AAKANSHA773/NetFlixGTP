import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import movieReducer from "./movieSLice"
import gtpReducer from "./gtpSlice"
import configReducer from "./configSlice"
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt : gtpReducer,
    config: configReducer
  },
});
export default appStore;
