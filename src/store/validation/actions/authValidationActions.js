import { useDispatch, useSelector } from "react-redux";

export const authInput = () => {
  const dispatch = useDispatch();
  const {
    usernameIsTouched,
    emailIsTouched,
    passwordIsTouched,
    passwordConfirmIsTouched,
  } = useSelector((state) => state.validation);

  const authInputValues = useSelector((state) => state.auth);
  const { username, email, password, passwordConfirm } = authInputValues;

  const usernameIsValid = username.trim() !== "";
  const usernameHasError = !usernameIsValid && usernameIsTouched;

  const passwordIsValid = password.trim() !== "";
  const passwordHasError = !passwordIsValid && passwordIsTouched;

  const passwordConfirmisValid = passwordConfirm.trim() !== "";
  const passwordConfirmHasError = !passwordConfirmisValid && passwordConfirmIsTouched;

  const emailIsValid = email.includes() !== "@";
  const emailHasError = !emailIsValid && emailIsTouched;

  return {
    usernameHasError,
    passwordHasError,
    passwordConfirmHasError,
    emailHasError
  };
};
