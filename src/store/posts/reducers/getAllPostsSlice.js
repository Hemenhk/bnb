import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postList: [],
  isLoading: true,
  error: null,
};

const getAllPostsSlice = createSlice({
  name: "allPosts",
  initialState,
  reducers: {
    fetchStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchSuccess(state, action) {
      state.isLoading = false;
      state.postList = action.payload;
      state.error = null;
    },
    fetchFailed(state, action) {
      state.isLoading = false;
      state.postList = [];
      state.error = action.payload;
    },
  },
});

export const { fetchFailed, fetchStart, fetchSuccess } =
  getAllPostsSlice.actions;
export default getAllPostsSlice;
