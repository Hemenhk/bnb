import axios from "axios";
import { setError, setLogin } from "../reducers/authSlice";
import { useCookies } from "react-cookie"

export const signinAction = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://movstar-api.herokuapp.com/api/users/signin",
      userData
    );
    const {token, data} = response.data

    localStorage.setItem("token", token)
    console.log(response)
    dispatch(setLogin({ user: data, token: token}))
  } catch (err) {
    dispatch(setError(err.message));
  }
};
