import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../services/AppSlice";
import authSlice from "../services/AuthSlice";
import { authApiSlice } from "../services/AuthApiSlice";
import { appointmentApiSlice } from "../services/AppointmentApiSlice";
import { userApiSlice } from "../services/UserApiSlice";
import { productApiSlice } from "../services/ProductApiSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    auth: authSlice,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [userApiSlice.reducerPath]: userApiSlice.reducer,
    [appointmentApiSlice.reducerPath]: appointmentApiSlice.reducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApiSlice.middleware)
      .concat(userApiSlice.middleware)
      .concat(appointmentApiSlice.middleware)
      .concat(productApiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
