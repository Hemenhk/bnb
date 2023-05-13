import axios from "axios";
import {
  getMovieFailed,
  getMovieStart,
  getMovieSuccess,
} from "../reducers/getPostIdSlice";
import { setEditPostSuccess } from "../reducers/createPostSlice";

export const getSinglePostAction = (postId) => async (dispatch) => {
  try {
    dispatch(getMovieStart());
    const response = await axios.get(
      `https://movstar-api.herokuapp.com/api/posts/${postId}`
    );
    dispatch(getMovieSuccess(response.data.data.post));
    console.log(response)
  } catch (err) {
    dispatch(getMovieFailed(err.message));
  }
};

export const getPrePop = (postId) => async (dispatch) => {
  try {
    dispatch(getMovieStart());
    const response = await axios.get(
      `https://movstar-api.herokuapp.com/api/posts/${postId}`
    );
    dispatch(setEditPostSuccess(response.data.data.post));
  } catch (err) {
    dispatch(getMovieFailed(err.message));
  }
};
