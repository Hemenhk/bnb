import { useDispatch, useSelector } from "react-redux";
import {
  dateBlur,
  descBlur,
  imageCoverBlur,
  locationBlur,
  priceBlur,
  titleBlur,
} from "../reducers/inputValidationSlice";

export const useInput = () => {
  const dispatch = useDispatch();
  const {
    titleIsTouched,
    descIsTouched,
    locationIsTouched,
    priceIsTouched,
    dateIsTouched,
    imageCoverIsTouched,
  } = useSelector((state) => state.validation);

  const postValues = useSelector((state) => state.createPost.postValues);

  const { title, description, location, price, createdAt, imageCover } =
    postValues || {};

  const titleIsValid = title.trim() !== "";
  const titleHasError = !titleIsValid && titleIsTouched;

  const descIsValid = description.trim() !== "";
  const descHasError = !descIsValid && descIsTouched;

  const locationIsValid = location.trim() !== "";
  const locationHasError = !locationIsValid && locationIsTouched;

  const priceIsValid = price !== "";
  const priceHasError = !priceIsValid && priceIsTouched;

  const dateIsValid = createdAt;
  const dateHasError = !dateIsValid && dateIsTouched;

  const imageCoverIsValid = imageCover.trim() !== "";
  const imageCoverHasError = !imageCoverIsValid && imageCoverIsTouched;

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

  return {
    titleHasError,
    descHasError,
    locationHasError,
    priceHasError,
    dateHasError,
    imageCoverHasError,
    titleBlurHandler,
    descBlurHandler,
    locationBlurHandler,
    priceBlurHandler,
    dateBlurHandler,
    imageBlurHandler,
  };
};
