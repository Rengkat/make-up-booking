import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../services/AppSlice";
import authSlice from "../services/AuthSlice";
import { apiSlice } from "../services/ApiSlice";
import { authApiSlice } from "../services/AuthApiSlice";
import { userApiSlice } from "../services/UserApiSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    auth: authSlice,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
