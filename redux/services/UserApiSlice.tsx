import { getTokenFromLocalStorage } from "../localStorage";
import { apiSlice } from "./ApiSlice";

const token = getTokenFromLocalStorage();
const USER_URL = "/user";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (build: any) => ({
    getUserDetails: build.query({
      query: () => ({
        url: `${USER_URL}/profile`,
      }),
    }),
    updateUserDetail: build.mutation({
      query: (data: any) => ({
        url: `${USER_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const { useGetUserDetailsQuery, useUpdateUserDetailMutation } = userApiSlice;
