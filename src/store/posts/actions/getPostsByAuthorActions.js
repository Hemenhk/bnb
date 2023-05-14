import axios from "axios";
import {
  fetchFailed,
  fetchStart,
  fetchSuccess,
} from "../reducers/getPostsByAuthorSlice";

export const fetchPostsByAuthor = (profileId) => async (dispatch) => {
  try {
    dispatch(fetchStart());
    const response = await axios.get(
      `https://movstar-api.herokuapp.com/api/posts/author/${profileId}`
    );
    dispatch(fetchSuccess(response.data.data.posts));
  } catch (error) {
    dispatch(fetchFailed(error.message));
  }
};
