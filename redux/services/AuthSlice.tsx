import { createSlice } from "@reduxjs/toolkit";
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  addUserToLocalStorage,
} from "../localStorage";
("../localStorage");

const authSlice = createSlice({
  initialState: {
    user: getUserFromLocalStorage(),
    isLogin: !!getUserFromLocalStorage(),
  },
  name: "auth",
  reducers: {
    setUserDetails(state, action) {
      const user = action.payload;
      state.user = user;
      state.isLogin = true;
      addUserToLocalStorage(user);
    },
    logout(state, action) {
      state.user = null;
      state.isLogin = false;
      removeUserFromLocalStorage();
    },
  },
});
export default authSlice.reducer;
export const { setUserDetails, logout } = authSlice.actions;
