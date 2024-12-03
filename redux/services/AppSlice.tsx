import { createSlice } from "@reduxjs/toolkit";
import { getShopGrid } from "../localStorage";

const initialState = {
  isOpenSideBar: false,
  isOpenSideCart: false,
  shopGrid: getShopGrid(),
  shippingFee: 1500,
  fromCart: false,
};
const appSlice = createSlice({
  name: "AppState",
  initialState,
  reducers: {
    openSideBar(state) {
      state.isOpenSideBar = !state.isOpenSideBar;
    },
    openSideCart(state) {
      state.isOpenSideCart = !state.isOpenSideCart;
    },
    changeGrid(state, action) {
      state.shopGrid = action.payload;
    },
    proceedFromCart(state, action) {
      state.fromCart = action.payload;
    },
  },

  extraReducers: {},
});

export default appSlice.reducer;
export const { openSideBar, openSideCart, changeGrid, proceedFromCart } = appSlice.actions;
