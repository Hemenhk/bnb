import axios from "axios";
import {
  createPostFailed,
  createPostStart,
  createPostSuccess,
} from "../reducers/createPostSlice";

export const createPostAction = (post) => async (dispatch) => {
  try {
    dispatch(createPostStart());
    await axios.post("https://movstar-api.herokuapp.com/api/posts", post);
    dispatch(createPostSuccess());
  } catch (err) {
    dispatch(createPostFailed(err.message));
  }
};
