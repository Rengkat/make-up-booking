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
        maxPrice = 10000,
        sort = "",
        page = 1,
        featured = false,
      }) => {
        const params = new URLSearchParams({
          name,
          category,
          minPrice,
          maxPrice,
          sort,
          page,
          featured: featured ? "true" : "",
        }).toString();

        return {
          url: `${PRODUCTS_URL}?${params}`,
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
export const { useGetAllProductsQuery, useGetSingleProductsQuery } = productApiSlice;
