import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./ApiSlice";
const CART_URL = "wishlist";
export const wishlistApiSlice = createApi({
  reducerPath: "wishlistApi",
  baseQuery,
  tagTypes: ["Wishlist"],
  endpoints: (build) => ({
    addToWishlist: build.mutation({
      query: (data) => ({
        method: "POST",
        url: `${CART_URL}`,
        body: data,
      }),
      invalidatesTags: ["Wishlist"],
    }),
    removeFromWishlist: build.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `${CART_URL}`,
        body: id,
      }),
      invalidatesTags: ["Wishlist"],
    }),

    getUserWishlistProducts: build.query({
      query: () => ({
        url: `${CART_URL}`,
      }),
      providesTags: ["Wishlist"],
    }),
    getSingleUserWishlistProducts: build.query({
      query: (id) => ({
        url: `${CART_URL}/${id}`,
      }),
      providesTags: ["Wishlist"],
    }),
  }),
});
export const {
  useAddToWishlistMutation,
  useGetUserWishlistProductsQuery,
  useGetSingleUserWishlistProductsQuery,
  useRemoveFromWishlistMutation,
} = wishlistApiSlice;