import { shopapi } from "./api.reducer";
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/types";

interface State {
    products: Product[];
    isLoading: boolean;
    errors: string;
  }
  
  const initialState: State = {
    products: [],
    isLoading: false,
    errors: '',
  };
  
  export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(shopapi.endpoints.getPosts.matchPending, (state) => {
                state.isLoading = true;
            })
            .addMatcher(shopapi.endpoints.getPosts.matchFulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addMatcher(shopapi.endpoints.getPosts.matchRejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.error.message || ''; 
            });
    },
  });
  
  export default dataSlice.reducer;