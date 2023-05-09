import axios from "axios";
import { setError, setLogin } from "../reducers/authSlice";

export const signinAction = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://movstar-api.herokuapp.com/api/users/signin",
      userData
    );
    const { token } = response.data;
    const { _id } = response.data.data.user;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(_id));
    dispatch(setLogin());
  } catch (err) {
    dispatch(setError(err.message));
  }
};
