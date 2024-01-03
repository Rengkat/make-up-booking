import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenSideBar: false,
  isOpenSideCart: false,
  shopGrid: 4,
};
const AppSlice = createSlice({
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

export default AppSlice.reducer;
export const { openSideBar, openSideCart, changeGrid } = AppSlice.actions;
