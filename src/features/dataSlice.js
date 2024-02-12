import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  clickedDeal: {},
  loading: false,
  watchlist: [],
  dealID: "",
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
    addToWatchlist(state, action) {
      console.log(state.watchlist);
      const filtered = state?.watchlist.find(
        (deal) => deal.gameID === action.payload.gameID
      );
      if (filtered === undefined) {
        state.watchlist.push(action.payload);
        state.clickedDeal = {
          ...state.clickedDeal,
          isInWatchlist: !state.clickedDeal.isInWatchlist,
        };
      } else {
        console.log(state.watchlist.length, 1);
        if (state.watchlist.length === 1) {
          state.watchlist = [];
          state.clickedDeal = {
            ...state.clickedDeal,
            isInWatchlist: !state.clickedDeal.isInWatchlist,
          };
        } else {
          state.watchlist = [
            {
              ...state.watchlist.filter(
                (deal) => deal.gameID !== action.payload.gameID
              ),
            },
          ];
          state.clickedDeal = {
            ...state.clickedDeal,
            isInWatchlist: !state.clickedDeal.isInWatchlist,
          };
        }
      }
    },
    updateDealID(state, action) {
      state.dealID = action.payload;
    },
  },
});

export const {
  updateData,
  updateClicked,
  toggleLoading,
  addToWatchlist,
  updateDealID,
} = dataSlice.actions;

export default dataSlice.reducer;
