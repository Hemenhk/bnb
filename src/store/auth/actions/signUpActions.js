import axios from "axios";
import { setError, setIsLoading, setIsNotLoading } from "../reducers/authSlice";

export const signupAction = (user) => async (dispatch) => {
  try {
    dispatch(setIsLoading());
    const response = await axios.post(
      "https://movstar-api.herokuapp.com/api/users/signup",
      user
    );
    dispatch(setIsNotLoading());
    return response;
  } catch (err) {
    dispatch(setError(err.message));
    return Promise.reject(err);
  }
};
