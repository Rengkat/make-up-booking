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
    removeFromCart: build.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `${CART_URL}`,
        body: id,
      }),
      invalidatesTags: ["Cart"],
    }),
    updateCartProduct: build.mutation({
      query: ({ id, quantity }) => ({
        method: "PATCH",
        url: `${CART_URL}/${id}`,
        body: { quantity },
      }),
      invalidatesTags: ["Cart"],
    }),
    getUserCartProducts: build.query({
      query: () => ({
        url: `${CART_URL}`,
      }),
      providesTags: ["Cart"],
    }),
    getSingleUserCartProducts: build.query({
      query: (id) => ({
        url: `${CART_URL}/${id}`,
      }),
      providesTags: ["Cart"],
    }),
  }),
});
export const {
  useAddToCartMutation,
  useGetUserCartProductsQuery,
  useGetSingleUserCartProductsQuery,
  useRemoveFromCartMutation,
  useUpdateCartProductMutation,
} = cartApiSlice;
