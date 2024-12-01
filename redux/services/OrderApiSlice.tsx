import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./ApiSlice";
import { url } from "inspector";
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
    verifyPayment: build.mutation({
      query: (orderId) => ({
        method: "POST",
        url: `${ORDERS_URL}/verify/${orderId}`,
        body: {},
      }),
    }),

    getAllUserOrders: build.query({
      query: () => ({
        url: `${ORDERS_URL}/user-orders`,
      }),
      providesTags: ["Orders"],
    }),
    getSingleOrder: build.query({
      query: (id) => ({
        url: `${ORDERS_URL}/${id}`,
      }),
      providesTags: ["Orders"],
    }),
    updateOrder: build.mutation({
      query: ({ id, status }) => ({
        method: "PATCH",
        url: `${ORDERS_URL}/${id}`,
        body: { status },
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});
export const {
  useCreateOrderMutation,
  useVerifyPaymentMutation,
  useGetAllUserOrdersQuery,
  useGetSingleOrderQuery,
  useUpdateOrderMutation,
} = orderApiSlice;
