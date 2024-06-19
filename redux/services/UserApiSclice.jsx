import { apiSlice } from "./ApiSlice";
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
  }),
});
export const { useLoginMutation } = userApiSlice;
