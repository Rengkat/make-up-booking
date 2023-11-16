import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "../services/AppSlice";
export const store = configureStore({
  reducer: AppSlice,
});
