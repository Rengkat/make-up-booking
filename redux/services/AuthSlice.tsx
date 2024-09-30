import { createSlice } from "@reduxjs/toolkit";
import // addTokenToLocalStorage,
// getTokenFromLocalStorage,
// removeTokenFromLocalStorage,
"../localStorage";

const authSlice = createSlice({
  initialState: {
    user: null,
    isLogin: false,
  },
  name: "auth",
  reducers: {
    setUserDetails(state, action) {
      const { user } = action.payload;
      state.user = user;
      state.isLogin = true;
    },
    logout(state, action) {
      state.user = null;
      state.isLogin = false;
    },
  },
});
export default authSlice.reducer;
export const { setUserDetails, logout } = authSlice.actions;
