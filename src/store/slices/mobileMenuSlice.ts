import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const mobileMenuSlice = createSlice({
  name: "mobileMenu",
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isOpen = !state.isOpen;
    },
    openMenu(state) {
      state.isOpen = true;
    },
    closeMenu(state) {
      state.isOpen = false;
    },
  },
});

export const { toggleMenu, openMenu, closeMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
