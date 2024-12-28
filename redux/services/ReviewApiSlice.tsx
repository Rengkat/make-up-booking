import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./ApiSlice";
const PRODUCT_REVIEW = "reviews";

export const reviewApiSlice = createApi({
  reducerPath: "reviewApi",
  baseQuery,
  tagTypes: ["Review"],
  endpoints: (build) => ({
    getAllReviews: build.query({
      query: ({ productId = "" }) => {
        const params = new URLSearchParams({
          productId,
        });

        return {
          url: `${PRODUCT_REVIEW}?${params.toString()}`,
        };
      },
    }),

    addReview: build.mutation({
      query: ({ product, comment, rating }) => ({
        url: PRODUCT_REVIEW,
        method: "POST",
        body: { product, comment, rating },
      }),
    }),
  }),
});
export const { useAddReviewMutation } = reviewApiSlice;
