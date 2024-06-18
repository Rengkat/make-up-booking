import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "/api" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Product", "Appointment"],
  endpoints: (build) => ({
    // getUsers: build.query({
    //   query: () => "users",
    //   providesTags: ["User"],
    // }),
  }),
});

export const {} = apiSlice;
