import { useDispatch, useSelector } from "react-redux";
import {
  dateBlur,
  descBlur,
  emailBlur,
  imageCoverBlur,
  locationBlur,
  passwordBlur,
  passwordConfirmBlur,
  priceBlur,
  titleBlur,
  usernameBlur,
} from "../reducers/inputValidationSlice";

export const useInput = () => {
  const dispatch = useDispatch();
  const {
    usernameIsTouched,
    emailIsTouched,
    passwordIsTouched,
    passwordConfirmIsTouched,
    titleIsTouched,
    descIsTouched,
    locationIsTouched,
    priceIsTouched,
    dateIsTouched,
    imageCoverIsTouched,
  } = useSelector((state) => state.validation);
  const { title, description, location, price, createdAt, imageCover } =
    useSelector((state) => state.createPost);

  const authInputValues = useSelector((state) => state.auth.authInputValues);
  const { username, email, password, passwordConfirm } = authInputValues;

  const titleIsValid = title.trim() !== "";
  const titleHasError = !titleIsValid && titleIsTouched;

  const descIsValid = description.trim() !== "";
  const descHasError = !descIsValid && descIsTouched;

  const locationIsValid = location.trim() !== "";
  const locationHasError = !locationIsValid && locationIsTouched;

  const priceIsValid = price.trim() !== "";
  const priceHasError = !priceIsValid && priceIsTouched;

  const dateIsValid = createdAt.trim() !== "";
  const dateHasError = !dateIsValid && dateIsTouched;

  const imageCoverIsValid = imageCover.trim() !== "";
  const imageCoverHasError = !imageCoverIsValid && imageCoverIsTouched;

  const usernameIsValid = username.trim() !== "";
  const usernameHasError = !usernameIsValid && usernameIsTouched;

  const passwordIsValid = password.trim() !== "";
  const passwordHasError = !passwordIsValid && passwordIsTouched;

  const passwordConfirmisValid = passwordConfirm.trim() !== "";
  const passwordConfirmHasError = !passwordConfirmisValid && passwordConfirmIsTouched;

  const emailIsValid = email.includes("@") && email.trim() !== "";
  const emailHasError = !emailIsValid && emailIsTouched;

  const titleBlurHandler = (e) => {
    dispatch(titleBlur());
  };

  const descBlurHandler = (e) => {
    dispatch(descBlur());
  };

  const locationBlurHandler = (e) => {
    dispatch(locationBlur());
  };

  const priceBlurHandler = (e) => {
    dispatch(priceBlur());
  };

  const dateBlurHandler = (e) => {
    dispatch(dateBlur());
  };

  const imageBlurHandler = (e) => {
    dispatch(imageCoverBlur());
  };

  const usernameBlurHandler = (e) => {
    dispatch(usernameBlur())
  }

  const emailBlurHandler = (e) => {
    dispatch(emailBlur())
  }

  const passwordBlurHandler = (e) => {
    dispatch(passwordBlur())
  }

  const passwordConfirmBlurHandler = (e) => {
    dispatch(passwordConfirmBlur())
  }

  return {
    titleHasError,
    descHasError,
    locationHasError,
    priceHasError,
    dateHasError,
    imageCoverHasError,
    usernameHasError,
    passwordHasError,
    passwordConfirmHasError,
    emailHasError,
    titleBlurHandler,
    descBlurHandler,
    locationBlurHandler,
    priceBlurHandler,
    dateBlurHandler,
    imageBlurHandler,
    usernameBlurHandler,
    passwordBlurHandler,
    passwordConfirmBlurHandler,
    emailBlurHandler
  };
};
