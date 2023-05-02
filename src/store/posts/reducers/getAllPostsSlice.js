import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPosts } from "../actions/getAllPostsActions";

const initialState = {
  postList: [],
  isLoading: false,
  error: "",
};

const getAllPostsSlice = createSlice({
  name: "allPosts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAllPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postList = action.payload;
        state.error = "";
      })
      .addCase(fetchAllPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default getAllPostsSlice;
