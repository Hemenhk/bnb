import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: null,
  isLoading: false,
  error: "",
  title: "",
  description: "",
  location: "",
  price: "",
  owner: "",
  createdAt: "",
  imageCover: "",
};

const getSinglePost = createSlice({
  name: "getSinglePost",
  initialState,
  reducers: {
    getMovieStart(state) {
      state.isLoading = true;
      state.error = "";
    },
    getMovieSuccess(state, action) {
      state.isLoading = false;
      state.post = action.payload;
      state.error = "";
    },
    getMovieFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getMovieFailed, getMovieStart, getMovieSuccess } =
  getSinglePost.actions;
export default getSinglePost;
