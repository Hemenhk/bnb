import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
  isLoading: false,
  error: null,
};

const deletePostSlice = createSlice({
  name: "deletePost",
  initialState,
  reducers: {
    deleteStart(state) {
      state.isLoading = true;
    },
    deleteSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    },
    deleteFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { deleteFailed, deleteStart, deleteSuccess } =
  deletePostSlice.actions;
export default deletePostSlice;
