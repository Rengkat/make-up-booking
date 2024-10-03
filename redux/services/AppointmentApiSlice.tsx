import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./ApiSlice";
const APPOINTMENT_URL = "/appointments";
export const appointmentApiSlice = createApi({
  reducerPath: "appointmentApi",
  baseQuery,
  tagTypes: ["Appointment"],
  endpoints: (build) => ({
    bookAppointment: build.mutation({
      query: (data) => ({
        url: `${APPOINTMENT_URL}/register`,
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["Appointment"],
    }),
    getAllUserAppointments: build.query({
      query: () => ({
        url: `${APPOINTMENT_URL}`,
        credentials: "include",
      }),
      providesTags: ["Appointment"],
    }),
  }),
});
export const { useBookAppointmentMutation, useGetAllUserAppointmentsQuery } = appointmentApiSlice;
