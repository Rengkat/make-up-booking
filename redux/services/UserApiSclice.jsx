import { getTokenFromLocalStorage } from "../localStorage";
import { apiSlice } from "./ApiSlice";

const token = getTokenFromLocalStorage();
const USER_URL = "/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    getUserDetails: build.query({
      query: () => ({
        url: `${USER_URL}/profile`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateUserDetail: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PUT",
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useGetUserDetailsQuery, useUpdateUserDetailMutation } =
  userApiSlice;
