import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./ApiSlice";
const ORDERS_URL = "orders";
export const orderApiSlice = createApi({
  reducerPath: "orderApi",
  baseQuery,
  tagTypes: ["Orders"],
  endpoints: (build) => ({
    createOrder: build.mutation({
      query: (orders) => ({
        method: "POST",
        url: `${ORDERS_URL}`,
        body: orders,
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});
export const { useCreateOrderMutation } = orderApiSlice;
