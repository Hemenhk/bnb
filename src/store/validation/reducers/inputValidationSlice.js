import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usernameIsTouched: false,
  emailIsTouched: false,
  passwordIsTouched: false,
  passwordConfirmIsTouched: false,
  titleIsTouched: false,
  descIsTouched: false,
  locationIsTouched: false,
  priceIsTouched: false,
  dateIsTouched: false,
  imageCoverIsTouched: false,
};

const inputValidationSlice = createSlice({
  name: "inputVal",
  initialState,
  reducers: {
    usernameBlur: (state) => {
      state.usernameIsTouched = true;
    },
    emailBlur: (state) => {
      state.emailIsTouched = true;
    },
    passwordBlur: (state) => {
      state.passwordIsTouched = true;
    },
    passwordConfirmBlur: (state) => {
      state.passwordConfirmIsTouched = true;
    },
    titleBlur: (state) => {
      state.titleIsTouched = true;
    },
    descBlur: (state) => {
      state.descIsTouched = true;
    },
    locationBlur: (state) => {
      state.locationIsTouched = true;
    },
    priceBlur: (state) => {
      state.priceIsTouched = true;
    },
    dateBlur: (state) => {
      state.dateIsTouched = true;
    },
    imageCoverBlur: (state) => {
      state.imageCoverIsTouched = true;
    },
  },
});

export const {
  usernameBlur,
  emailBlur,
  passwordBlur,
  passwordConfirmBlur,
  titleBlur,
  dateBlur,
  descBlur,
  locationBlur,
  priceBlur,
  imageCoverBlur,
} = inputValidationSlice.actions;
export default inputValidationSlice;
