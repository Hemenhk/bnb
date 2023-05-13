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
      state.success = true;
    },
    editPostFailed(state, action) {
      state.isLoading = false;
      state.error = action.payload;
      state.success = false;
    },
  },
});

export const { editPostFailed, editPostStart, setEditPostSuccess } =
  editPostSlice.actions;
export default editPostSlice;
