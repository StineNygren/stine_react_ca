import { configureStore } from "@reduxjs/toolkit";

import { shopapi } from "./api.reducer";
import dataReducer from "./redux.reducer";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    [shopapi.reducerPath]: shopapi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopapi.middleware),
});