import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./ApiSlice";
const WISHLIST_URL = "wishlist";
export const wishlistApiSlice = createApi({
  reducerPath: "wishlistApi",
  baseQuery,
  tagTypes: ["Wishlist"],
  endpoints: (build) => ({
    addToWishlist: build.mutation({
      query: ({ productId, fromDetailPage = false }) => ({
        method: "POST",
        url: fromDetailPage ? `${WISHLIST_URL}/${productId}` : `${WISHLIST_URL}`,
        body: !fromDetailPage ? { productId } : undefined,
      }),
      invalidatesTags: ["Wishlist"],
    }),

    removeFromWishlist: build.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `${WISHLIST_URL}`,
        body: id,
      }),
      invalidatesTags: ["Wishlist"],
    }),

    getUserWishlistProducts: build.query({
      query: () => ({
        url: `${WISHLIST_URL}`,
      }),
      providesTags: ["Wishlist"],
    }),
    getSingleUserWishlistProducts: build.query({
      query: (id) => ({
        url: `${WISHLIST_URL}/${id}`,
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
