import axios from "axios";
import { setError, setLogin } from "../reducers/authSlice";

export const signinAction = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://movstar-api.herokuapp.com/api/users/signin",
      userData
    );

    const { token } = response.data;
    const { user } = response.data.data;

    dispatch(setLogin(user));
    localStorage.setItem("token", token);
    return response;
  } catch (err) {
    dispatch(setError(err.message));
    return Promise.reject(err)
  }
};
