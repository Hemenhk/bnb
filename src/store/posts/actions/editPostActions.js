import axios from "axios";
import {
  editPostFailed,
  editPostStart,
  setEditPostSuccess,
} from "../reducers/editPostSlice";

export const editPostAction = (postId, postData) => async (dispatch) => {
  try {
    dispatch(editPostStart());
    const response = await axios.patch(
      `https://movstar-api.herokuapp.com/api/posts/${postId}`,
      postData
    );
    dispatch(setEditPostSuccess(response.data.data.post));
  } catch (err) {
    dispatch(editPostFailed(err.message));
  }
};
