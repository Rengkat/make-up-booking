import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./ApiSlice";
const PRODUCTS_URL = "products";
export const productApiSlice = createApi({
  reducerPath: "productApi",
  baseQuery,
  tagTypes: ["Product"],
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: ({
        name = "",
        category = "",
        minPrice = 0,
        maxPrice = 1000,
        sort = "",
        page = 1,
        featured,
        bestSelling,
      }) => {
        const params = new URLSearchParams({
          name,
          category,
          minPrice,
          maxPrice,
          sort,
          page,
        });

        if (typeof featured !== "undefined") params.append("featured", featured ? "true" : "false");
        if (typeof bestSelling !== "undefined")
          params.append("bestSelling", bestSelling ? "true" : "false");

        return {
          url: `${PRODUCTS_URL}?${params.toString()}`,
        };
      },
    }),

    getAllFeaturedOrBestSellingProducts: build.query({
      query: ({
        name = "",
        category = "",
        minPrice = 0,

        sort = "",
        page = 1,
        featured,
        bestSelling,
      }) => {
        const params = new URLSearchParams({
          name,
          category,
          minPrice,
          sort,
          page,
        });

        if (typeof featured !== "undefined") {
          params.append("featured", featured ? "true" : "false");
        }

        if (typeof bestSelling !== "undefined") {
          params.append("bestSelling", bestSelling ? "true" : "false");
        }

        return {
          url: `${PRODUCTS_URL}?${params.toString()}`,
        };
      },
    }),

    getSingleProducts: build.query({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
      }),
    }),
  }),
});
export const {
  useGetAllProductsQuery,
  useGetSingleProductsQuery,
  useGetAllFeaturedOrBestSellingProductsQuery,
} = productApiSlice;
