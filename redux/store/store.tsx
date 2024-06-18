import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../services/AppSlice";
import authSlice from "../services/AuthSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
