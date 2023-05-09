const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isAuth: false,
  isLoading: false,
  token:null,
  user: null,
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
      state.token = action.payload
      state.user = action.payload
      state.isLoading = false;
    },
    setLogOut(state) {
      state.isAuth = false;
      state.isLoading = false;
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    setIsNotLoading(state) {
      state.isLoading = false;
    },
    setError(state, action) {
      state.error = action.payload;
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
  setError
} = authSlice.actions;
export default authSlice;
