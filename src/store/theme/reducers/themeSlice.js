const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  currentTheme: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setChangeTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setChangeTheme } = themeSlice.actions;
export default themeSlice;
