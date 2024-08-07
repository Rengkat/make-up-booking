import { createSlice } from "@reduxjs/toolkit";
import { getShopGrid } from "../localStorage";

const initialState = {
  isOpenSideBar: false,
  isOpenSideCart: false,
  shopGrid: getShopGrid(),
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
  },

  extraReducers: {},
});

export default appSlice.reducer;
export const { openSideBar, openSideCart, changeGrid } = appSlice.actions;
