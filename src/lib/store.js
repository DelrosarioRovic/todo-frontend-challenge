import themeReducer from "./hooks/theme-reducer";

import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () => {
  return configureStore({
    reducer: {
      themeReducer,
    },
  });
};
