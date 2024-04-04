import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types/types';

interface CartItem extends Product {
  count: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadCart: (state) => {
      const savedCart = localStorage.getItem('cart');
      state.items = savedCart ? JSON.parse(savedCart) : [];
    },
    addToCart: (state, action: PayloadAction<Product>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.items[itemIndex].count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    increaseItem: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((product) => product.id === action.payload);
      if (index >= 0) {
        state.items[index].count += 1;
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
    decreaseItem: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((product) => product.id === action.payload);
      if (index >= 0) {
        if (state.items[index].count > 1) {
          state.items[index].count -= 1;
        } else {
          state.items.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex((product) => product.id === action.payload);
      if (index >= 0) {
        state.items.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(state.items));
      }
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

export const { loadCart, addToCart, increaseItem, decreaseItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;