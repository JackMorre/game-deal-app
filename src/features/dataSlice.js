import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  clickedDeal: {},
  loading: false,
  watchlist: [],
  history: [],
  dealID: "",
  quicksearchData: [
    {
      name: "Best Deals",
      cheapsharkUrl: "https://www.cheapshark.com/api/1.0/deals?upperPrice=10",
      urlName: "best-deals",
      opened: false,
    },
    {
      name: "Deals Below £15",
      cheapsharkUrl: "https://www.cheapshark.com/api/1.0/deals?upperPrice=15",
      urlName: "deals-below-15",
      opened: false,
    },
    {
      name: "Deal Below £30",
      cheapsharkUrl: "https://www.cheapshark.com/api/1.0/deals?upperPrice=30",
      urlName: "deals-below-30",
      opened: false,
    },
  ],
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
    },
    updateDealID(state, action) {
      state.dealID = action.payload;
    },
    updateHistory(state, action) {
      state.history.unshift(action.payload);
    },
    updateQuicksearchData(state, action) {
      state.quicksearchData = action.payload;
    },
    resetQuicksearch(state, action) {
      state.quicksearchData = initialState.quicksearchData;
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
  updateQuicksearchData,
  resetQuicksearch,
} = dataSlice.actions;

export default dataSlice.reducer;

// csh010053685
