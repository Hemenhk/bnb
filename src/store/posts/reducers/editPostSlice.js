import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
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

const editPostSlice = createSlice({
  name: "editPost",
  initialState,
  reducers: {
    editPostStart(state) {
      state.isLoading = true;
    },
    setEditPostSuccess(state, action) {
      state.isLoading = false;
      state.postValues = action.payload;
    },
    editPostFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    editInputValues(state, action) {
      state.postValues = {
        ...state.postValues,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});

export const {
  editInputValues,
  editPostFailed,
  editPostStart,
  setEditPostSuccess,
} = editPostSlice.actions;
export default editPostSlice;
