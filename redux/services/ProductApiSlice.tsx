import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./ApiSlice";
const PRODUCTS_URL = "products";
export const productApiSlice = createApi({
  reducerPath: "produceApi",
  baseQuery,
  tagTypes: ["Product"],
  endpoints: (build) => ({
    getAllProducts: build.query({
      query: () => ({
        url: `${PRODUCTS_URL}`,
      }),
    }),
    getSingleProducts: build.query({
      query: (id) => ({
        url: `${PRODUCTS_URL}/${id}`,
      }),
    }),
  }),
});
export const { useGetAllProductsQuery, useGetSingleProductsQuery } = productApiSlice;
