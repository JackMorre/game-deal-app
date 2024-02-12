import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "../ui/UiSlice";
import dataReducer from "../features/dataSlice";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    data: dataReducer,
  },
});

export default store;
