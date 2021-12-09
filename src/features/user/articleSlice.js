import { createSlice } from "@reduxjs/toolkit";
import db, { storage } from "../../firebase.js";
const initialState = {
  loading: false,
};

export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    }, 
  },
});

export const { setLoading} = articleSlice.actions;

export default articleSlice.reducer;
