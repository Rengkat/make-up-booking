import { createSlice } from "@reduxjs/toolkit";
import {
  addTokenToLocalStorage,
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
} from "../localStorage";

const authSlice = createSlice({
  initialState: {
    user: null,
    token: getTokenFromLocalStorage(),
    isLogin: false,
  },
  name: "auth",
  reducers: {
    setUserDetails(state, action) {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      addTokenToLocalStorage(token);
    },
    logout(state, action) {
      state.user = null;
      removeTokenFromLocalStorage();
    },
  },
});
export default authSlice.reducer;
export const { setUserDetails, logout } = authSlice.actions;
