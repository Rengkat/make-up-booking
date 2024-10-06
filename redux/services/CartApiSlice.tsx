import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./ApiSlice";
const CART_URL = "cart";
export const cartApiSlice = createApi({
  reducerPath: "cartApi",
  baseQuery,
  tagTypes: ["Cart"],
  endpoints: (build) => ({
    addToCart: build.mutation({
      query: ({ productId, fromDetailPage = false }) => ({
        method: "POST",
        url: fromDetailPage ? `${CART_URL}/${productId}` : `${CART_URL}`, // Dynamic URL or body
        body: !fromDetailPage ? { id: productId } : undefined, // If not from the detail page, pass ID in the body
      }),
      invalidatesTags: ["Cart"],
    }),
    removeFromCart: build.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `${CART_URL}/remove-product`,
        body: { id },
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
