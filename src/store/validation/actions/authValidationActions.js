import { useDispatch, useSelector } from "react-redux";
import {
  emailBlur,
  passwordBlur,
  passwordConfirmBlur,
  usernameBlur,
} from "../reducers/inputValidationSlice";

export const useAuthInput = () => {
  const dispatch = useDispatch();
  const {
    usernameIsTouched,
    emailIsTouched,
    passwordIsTouched,
    passwordConfirmIsTouched,
  } = useSelector((state) => state.validation);

  const authInputValues = useSelector((state) => state.auth.authInputValues);
  const { username, email, password, passwordConfirm } = authInputValues;

  const usernameIsValid = username.trim() !== "";
  const usernameHasError = !usernameIsValid && usernameIsTouched;

  const passwordIsValid = password.trim() !== "";
  const passwordHasError = !passwordIsValid && passwordIsTouched;

  const passwordConfirmisValid = passwordConfirm.trim() !== "";
  const passwordConfirmHasError =
    !passwordConfirmisValid && passwordConfirmIsTouched;

  const emailIsValid = email.includes("@") && email.trim() !== "";
  const emailHasError = !emailIsValid && emailIsTouched;

  const usernameBlurHandler = (e) => {
    dispatch(usernameBlur());
  };

  const emailBlurHandler = (e) => {
    dispatch(emailBlur());
  };

  const passwordBlurHandler = (e) => {
    dispatch(passwordBlur());
  };

  const passwordConfirmBlurHandler = (e) => {
    dispatch(passwordConfirmBlur());
  };

  return {
    usernameHasError,
    passwordHasError,
    passwordConfirmHasError,
    emailHasError,
    usernameBlurHandler,
    emailBlurHandler,
    passwordBlurHandler,
    passwordConfirmBlurHandler,
  };
};
