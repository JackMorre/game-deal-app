import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMenuOpen: false,
  isHistoryOpen: false,
  isOnDesktopMode: false,
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
    toggleDesktopMode(state, action) {
      state.isOnDesktopMode = !state.isOnDesktopMode;
    },
  },
});

export const { toggleMenu, toggleHistory, resetMenu, toggleDesktopMode } =
  uiSlice.actions;

export default uiSlice.reducer;
