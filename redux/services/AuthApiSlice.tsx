import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./ApiSlice";
const AUTH_URL = "/auth";

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery,
  tagTypes: [],
  endpoints: (build) => ({
    register: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    login: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    verifyEmail: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/verify-email`,
        method: "POST",
        body: data,
      }),
    }),
    reverifyEmail: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/new-verification`,
        method: "POST",
        body: data,
      }),
    }),
    forgotPassword: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/forgot-password`,
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: build.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/reset-password`,
        method: "POST",
        body: data,
      }),
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: `${AUTH_URL}/logout`,
        method: "POST",
        body: {},
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useVerifyEmailMutation,
  useReverifyEmailMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApiSlice;
