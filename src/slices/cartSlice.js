import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //reducers
    addToCart: (state, action) => {
      const item = action.payload;
      //localStorage.setItem("cart", JSON.stringify([...state.cartItems, item]));
      state.cartItems = [...state.cartItems, item];
      //state.push(action.payload);
      return state;
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((e) => e.id !== action.payload);
      return state;
    },
  },
});
//actions creators
export const { addToCart, removeFromCart } = cartSlice.actions;
//reducer
export default cartSlice.reducer;
