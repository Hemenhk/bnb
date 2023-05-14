import axios from "axios";
import {
  createPostFailed,
  createPostStart,
  createPostSuccess,
} from "../reducers/createPostSlice";

export const createPostAction = (post) => async (dispatch) => {
  try {
    dispatch(createPostStart());
    const token = localStorage.getItem("token");
    await axios.post("https://movstar-api.herokuapp.com/api/posts", post, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(createPostSuccess());
  } catch (err) {
    dispatch(createPostFailed(err.message));
  }
};
