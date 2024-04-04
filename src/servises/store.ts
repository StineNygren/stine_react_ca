import { configureStore } from "@reduxjs/toolkit";

import { shopapi } from "./api.reducer";
import dataReducer from "./redux.reducer";
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    [shopapi.reducerPath]: shopapi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopapi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;