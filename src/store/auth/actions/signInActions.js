import axios from "axios";
import { setError, setLogin } from "../reducers/authSlice";

export const signinAction = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://movstar-api.herokuapp.com/api/users/signin",
      userData
    );
    // const data = response.data.data.user;
    // const { _id } = data;
    // const token = response.data.token;

    // localStorage.setItem("token", token);
    // if (data) {
    //   setTimeout(() => {
    //     navigate("/");
    //     dispatch(setLogin());
    //   }, 2000);
    // }
  } catch (err) {
    dispatch(setError(err.message));
  }
};
