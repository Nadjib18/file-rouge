import { createSlice } from "@reduxjs/toolkit";
import cartModule from "../utils/cartModule";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  subTotal: "0.00",
  shippingPrice: 9.99,
  total: "0.00",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: cartModule.addItemToCart,
    increaseItem: cartModule.incrementItem,
    decreaseItem: cartModule.decrementItem,
    removeItem: cartModule.deleteItem,
    deleteCart: cartModule.deleteCart,
  },
});

export const { addItem, increaseItem, decreaseItem, removeItem, deleteCart } =
  cartSlice.actions;

export default cartSlice.reducer;
