import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./ApiSlice";

const USER_URL = "/users";

export const userApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery,
  tagTypes: ["User", "Address"],
  endpoints: (build) => ({
    getUserDetails: build.query({
      query: () => ({
        url: `${USER_URL}/profile`,
      }),
      providesTags: ["User"],
    }),
    updateUserDetail: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/updatePassword`,
        method: "PATCH",
        body: data,
      }),
    }),
    addAddress: build.mutation({
      query: (address) => ({
        url: `${USER_URL}/address`,
        method: "PUT",
        body: address,
      }),
      invalidatesTags: ["User"],
    }),
    updateAddress: build.mutation({
      query: (address) => ({
        url: `${USER_URL}/updateAddress`,
        method: "PATCH",
        body: address,
      }),
      invalidatesTags: ["User"],
    }),
    deleteAddress: build.mutation({
      query: (addressId) => ({
        url: `${USER_URL}/address`,
        method: "DELETE",
        body: addressId,
      }),
      invalidatesTags: ["User"],
    }),
    getSingleAddress: build.query({
      query: ({ addressId }) => ({
        url: `${USER_URL}/addresses/${addressId}`,
      }),
    }),
  }),
});

export const {
  useGetUserDetailsQuery,
  useUpdateUserDetailMutation,
  useChangePasswordMutation,
  useAddAddressMutation,
  useDeleteAddressMutation,
  useGetSingleAddressQuery,
  useUpdateAddressMutation,
} = userApiSlice;
