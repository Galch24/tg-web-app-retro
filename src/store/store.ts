import { configureStore } from "@reduxjs/toolkit";
import mobileMenuReducer from "./slices/mobileMenuSlice";

export const store = configureStore({
  reducer: {
    mobileMenu: mobileMenuReducer,
  },
});
