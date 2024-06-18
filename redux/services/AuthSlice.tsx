import { createSlice } from "@reduxjs/toolkit";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../localStorage";

const authSlice = createSlice({
  initialState: {
    user: getUserFromLocalStorage(),
    isLogin: false,
  },
  name: "auth",
  reducers: {
    setUserDetails(state, action) {
      state.user = action.payload;
      addUserToLocalStorage(action.payload);
    },
    logout(state, action) {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
});
export default authSlice.reducer;
export const { setUserDetails, logout } = authSlice.actions;
