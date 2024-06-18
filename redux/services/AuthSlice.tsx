import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  initialState: {
    user: null,
    isLogin: false,
  },
  name: "auth",
  reducers: {
    getUser(state, action) {
      state.user = action.payload;
    },
  },
});
export default authSlice.reducer;
export const { getUser } = authSlice.actions;
