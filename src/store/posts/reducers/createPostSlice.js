import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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

const createPostSlice = createSlice({
  name: "createPost",
  initialState,
  reducers: {
    createPostStart(state) {
      state.isLoading = true;
    },
    createPostSuccess(state) {
      state.isLoading = false;
    },
    createPostFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setInputValues(state, action) {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    },
  },
});

export const {
  createPostFailed,
  createPostStart,
  createPostSuccess,
  setInputValues,
} = createPostSlice.actions;
export default createPostSlice;
