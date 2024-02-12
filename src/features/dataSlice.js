import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  clickedDeal: {},
  loading: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    updateData(state, action) {
      state.data = action.payload;
    },
    updateClicked(state, action) {
      state.clickedDeal = action.payload;
    },
    toggleLoading(state, action) {
      state.loading = !state.loading;
    },
  },
});

export const { updateData, updateClicked, toggleLoading } = dataSlice.actions;

export default dataSlice.reducer;
