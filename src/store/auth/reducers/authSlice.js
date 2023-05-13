const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isAuth: false,
  isLoading: false,
  user: null,
  success: false,
  error: null,
  authInputValues: {
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin(state, action) {
      state.isAuth = true;
      state.user = action.payload;
      state.isLoading = false;
      state.success = true;
    },
    setLogOut(state) {
      state.isAuth = false;
      state.isLoading = false;
      state.user = null;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    setIsNotLoading(state) {
      state.isLoading = false;
    },
    setError(state, action) {
      state.isAuth = false;
      state.error = action.payload;
      state.success = false;
    },
    setAuthInputValues(state, action) {
      state.authInputValues = {
        ...state.authInputValues,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});

export const {
  setIsLoading,
  setLogOut,
  setLogin,
  setAuthInputValues,
  setIsNotLoading,
  setError,
} = authSlice.actions;
export default authSlice;
