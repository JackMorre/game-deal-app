import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  isHistoryOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu(state, payload) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleHistory(state, payload) {
      state.isHistoryOpen = !state.isHistoryOpen;
    },
    resetMenu(state, action) {
      state.isMenuOpen = false;
      state.isHistoryOpen = false;
    },
  },
});

export const { toggleMenu, toggleHistory, resetMenu } = uiSlice.actions;

export default uiSlice.reducer;
