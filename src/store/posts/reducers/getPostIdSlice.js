import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: null,
  isLoading: false,
  error: "",
  titleId: "",
  descriptionId: "",
  locationId: "",
  priceId: "",
  ownerId: "",
  createdAtId: "",
  imageCoverId: "",
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
    getInputValues(state, action) {
      const {
        title,
        description,
        location,
        price,
        owner,
        createdAt,
        imageCover,
      } = action.payload;
      state.titleId = title;
      state.descriptionId = description;
      state.locationId = location;
      state.priceId = price;
      state.ownerId = owner;
      state.createdAtId = createdAt;
      state.imageCoverId = imageCover;
    },
  },
});

export const { getMovieFailed, getMovieStart, getMovieSuccess, getInputValues } =
  getSinglePost.actions;
export default getSinglePost;
