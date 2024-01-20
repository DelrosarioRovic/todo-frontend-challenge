import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

const themeReducer = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setLight: (state) => {
      state.isDark = true;
    },
    setDark: (state) => {
      state.isDark = false;
    },
    handleChangeTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { handleChangeTheme, setDark, setLight } = themeReducer.actions;
export default themeReducer.reducer;
