import { apiSlice } from "./ApiSlice";

const USER_URL = "/users";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUserDetails: build.query({
      query: () => ({
        url: `${USER_URL}/profile`,
        credentials: "include",
      }),
      providesTags: ["User"],
    }),
    updateUserDetail: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/profile`,
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["User"],
    }),
    changePassword: build.mutation({
      query: (data) => ({
        url: `${USER_URL}/updatePassword`,
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
    }),
    addAddress: build.mutation({
      query: (address) => ({
        url: `${USER_URL}/address`,
        method: "PUT",
        body: address,
        credentials: "include",
      }),
      invalidatesTags: ["User"],
    }),
    updateAddress: build.mutation({
      query: (address) => ({
        url: `${USER_URL}/address`,
        method: "PATCH",
        body: address,
        credentials: "include",
      }),
      invalidatesTags: ["User"],
    }),
    deleteAddress: build.mutation({
      query: (addressId) => ({
        url: `${USER_URL}/address`,
        method: "DELETE",
        body: addressId,
        credentials: "include",
      }),
      invalidatesTags: ["User"],
    }),
    getSingleAddress: build.query({
      query: ({ addressId }) => ({
        url: `${USER_URL}/addresses/${addressId}`,
        credentials: "include",
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
} = userApiSlice;
