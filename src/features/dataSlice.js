import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  clickedDeal: {},
  loading: false,
  watchlist: [],
  history: [],
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
      const filtered = state?.watchlist.some((deal) => {
        return deal.gameID === action.payload.gameID;
      });

      if (filtered === true) {
        state.watchlist = [
          ...state.watchlist.filter(
            (deal) => deal.gameID !== action.payload.gameID
          ),
        ];
        state.clickedDeal = {
          ...state.clickedDeal,
          isInWatchlist: !state.clickedDeal.isInWatchlist,
        };
      } else if (filtered === false) {
        state.watchlist = [action.payload, ...state.watchlist];
        state.clickedDeal = {
          ...state.clickedDeal,
          isInWatchlist: !state.clickedDeal.isInWatchlist,
        };
      } else {
        console.log(filtered);
      }
      // } else {
      //   console.log(state.watchlist.length, 1);
      //   if (state.watchlist.length === 1) {
      //     state.watchlist = [];
      //     state.clickedDeal = {
      //       ...state.clickedDeal,
      //       isInWatchlist: !state.clickedDeal.isInWatchlist,
      //     };
      //   } else {
      //     state.watchlist = [
      //       {
      //         ...state.watchlist.filter(
      //           (deal) => deal.gameID !== action.payload.gameID
      //         ),
      //       },
      //     ];
      //     state.clickedDeal = {
      //       ...state.clickedDeal,
      //       isInWatchlist: !state.clickedDeal.isInWatchlist,
      //     };
      //   }
      // }
    },
    updateDealID(state, action) {
      state.dealID = action.payload;
    },
    updateHistory(state, action) {
      state.history.unshift(action.payload);
    },
  },
});

export const {
  updateData,
  updateClicked,
  toggleLoading,
  addToWatchlist,
  updateDealID,
  updateHistory,
} = dataSlice.actions;

export default dataSlice.reducer;

// csh010053685
