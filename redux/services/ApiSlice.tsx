import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Configure base query with credentials
const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api",
  credentials: "include", // Important: This allows cookies to be included with requests
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (build) => ({}),
});
