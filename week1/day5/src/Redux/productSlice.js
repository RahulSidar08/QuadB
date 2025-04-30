import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      console.log("Reducer received:", action.payload);
      state.products.push(action.payload);
    },
  },
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;
