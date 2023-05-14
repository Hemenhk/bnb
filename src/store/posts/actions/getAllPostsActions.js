import axios from "axios";
import {
  fetchFailed,
  fetchStart,
  fetchSuccess,
} from "../reducers/getAllPostsSlice";

export const fetchAllPosts = () => async (dispatch) => {
  try {
    dispatch(fetchStart());
    const response = await axios.get(
      "https://movstar-api.herokuapp.com/api/posts"
    );
    dispatch(fetchSuccess(response.data.data.posts));
  } catch (error) {
    dispatch(fetchFailed(error.message));
  }
};
