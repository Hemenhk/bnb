import axios from "axios";
import { deleteFailed, deleteStart, deleteSuccess } from "../reducers/deletePostSlice";

export const deletePostAction = (postId) => async (dispatch) => {
  try {
    dispatch(deleteStart());
    const response = await axios.delete(`https://movstar-api.herokuapp.com/api/posts/${postId}`);
    dispatch(deleteSuccess(response.postId));
  } catch (err) {
    dispatch(deleteFailed(err.message))
  }
};
