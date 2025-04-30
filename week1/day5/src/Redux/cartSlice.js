import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  carts: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.carts.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.carts = state.carts.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
