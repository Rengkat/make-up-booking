import { apiSlice } from "./ApiSlice";

const USER_URL = "/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUserDetails: build.query({
      query: () => ({
        url: `${USER_URL}/profile`,
        credentials: "include",
      }),
    }),
    updateUserDetail: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/updatePassword`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetUserDetailsQuery, useUpdateUserDetailMutation, useChangePasswordMutation } =
  userApiSlice;
