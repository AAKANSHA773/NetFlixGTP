import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
  name: "gtp",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggleGptSearchView } = gtpSlice.actions;
export default gtpSlice.reducer;
