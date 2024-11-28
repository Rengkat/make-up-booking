import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5000/api";
// const baseUrl = "https://make-up-app-backend.onrender.com/api";

export const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: "include",
});
