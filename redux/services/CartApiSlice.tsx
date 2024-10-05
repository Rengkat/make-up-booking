import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./ApiSlice";
const CART_URL = "cart";
export const cartApiSlice = createApi({
  reducerPath: "cartApi",
  baseQuery,
  tagTypes: ["Cart"],
  endpoints: (build) => ({
    addToCart: build.mutation({
      query: (data) => ({
        method: "POST",
        url: `${CART_URL}`,
        body: data,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});
export const { useAddToCartMutation } = cartApiSlice;
