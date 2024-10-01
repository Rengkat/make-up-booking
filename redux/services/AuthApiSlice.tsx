import { apiSlice } from "./ApiSlice";

const USER_URL = "/auth";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    login: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    verifyEmail: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/verify-email`,
        method: "POST",
        body: data,
      }),
    }),
    reverifyEmail: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/new-verification`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useVerifyEmailMutation,
  useReverifyEmailMutation,
} = authApiSlice;
