import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://make-up-app-backend.onrender.com/api",
  credentials: "include", // Important: This allows cookies to be included with requests
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (build) => ({}),
});
