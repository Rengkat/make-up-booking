import { getTokenFromLocalStorage } from "../localStorage";
import { apiSlice } from "./ApiSlice";

const token = getTokenFromLocalStorage();
const USER_URL = "/user";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (build: any) => ({
    getUserDetails: build.query({
      query: () => ({
        url: `${USER_URL}/profile`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    updateUserDetail: build.mutation({
      query: (data: any) => ({
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

export const { useGetUserDetailsQuery, useUpdateUserDetailMutation } = userApiSlice;
