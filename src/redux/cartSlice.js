import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
    },

    removeItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.items = state.items.filter(item => item.id !== action.payload);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
      } else {
        // Optional: remove item if quantity goes to 0
        state.items = state.items.filter(item => item.id !== action.payload);
        state.totalQuantity -= 1;
      }
    },
  },
});

export const { addToCart, removeItem, clearCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
