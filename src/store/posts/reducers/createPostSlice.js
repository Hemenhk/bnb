import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  success: false,
  error: null,
  postValues: {
    title: "",
    description: "",
    location: "",
    price: "",
    owner: "",
    createdAt: "",
    imageCover: "",
  },
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
      state.success = true;
    },
    setEditPostSuccess(state, action) {
      state.isLoading = false;
      state.postValues = action.payload;
      state.success = true;
    },
    createPostFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },
    setInputValues(state, action) {
      state.postValues = {
        ...state.postValues,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});

export const {
  createPostFailed,
  createPostStart,
  createPostSuccess,
  setEditPostSuccess,
  setInputValues,
} = createPostSlice.actions;
export default createPostSlice;
