import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "../services/AppSlice";
export const store = configureStore({
  reducer: AppSlice,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
