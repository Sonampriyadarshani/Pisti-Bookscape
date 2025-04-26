// index.js or store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice";
import authReducer from "./redux/authSlice"; // ⬅️ import it
import booksReducer from "./redux/bookSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    
    books: booksReducer,
  },
});

export default store;
