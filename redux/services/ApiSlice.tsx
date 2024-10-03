import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseUrl = "https://make-up-app-backend.onrender.com/api";

export const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
});
