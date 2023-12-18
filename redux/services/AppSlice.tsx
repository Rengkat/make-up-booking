import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpenSideBar: false,
  isOpenSideCart: false,
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
  },
  extraReducers: {},
});

export default AppSlice.reducer;
export const { openSideBar, openSideCart } = AppSlice.actions;
