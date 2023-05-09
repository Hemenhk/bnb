import axios from "axios";
import { removeAuthToken, removeAuthUser } from "../../../utils/auth";

export const signOutAction = async () => {
  await axios.post("https://movstar-api.herokuapp.com/api/users/signout");
  removeAuthToken()
  removeAuthUser()
};
