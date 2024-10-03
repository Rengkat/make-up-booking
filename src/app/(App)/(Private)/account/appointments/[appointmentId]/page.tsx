"use client";
import React, { Fragment } from "react";
import { useGetSingleUserAppointmentsQuery } from "../../../../../../../redux/services/AppointmentApiSlice";
const fetchedAppointments = false;
interface Props {
  params: { appointmentId: string };
}
const Appointment = ({ params }: Props) => {
  const id = params.appointmentId;
  const { data } = useGetSingleUserAppointmentsQuery({ id });
  console.log(id);
  return (
    <div className="bg-white p-2 lg:py-3  lg:px-[2rem] text-xl text-slate-600 mb-[5rem] shadow">
      {fetchedAppointments ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className={` bg-dark-gold text-white capitalize px-5 py-2`}>APPOINTMENT DETAILS</div>
          <div className="flex gap-10 py-5 px-5">
            <div className="hidden xl:block">
              <div className="pb-2">Service:</div>
              <div className="pb-2">Date:</div>
              <div className="pb-2">Time:</div>
              <div className="pb-2">Service Type:</div>
              <div className="pb-2">Home Address:</div>
              <div className="pb-2">Status:</div>
            </div>
            <div className="">
              <h1 className="pb-2 font-bold">Facials, Hand and Toe Manicure</h1>
              <div className="pb-2">12 July 2024</div>
              <div className="pb-2">10:00pm</div>
              <div className="pb-2">Home Service </div>
              <div className="pb-2">
                No 3 LEA Primary School Sabon Barki, Gindiri, Plateau State, Nigeria
              </div>
              <div className="pb-2">Pending</div>
            </div>
          </div>
          <div className="flex gap-10 pb-10">
            <button className="bg-dark-gold text-white shadow py-3 px-5">Edit Appointment</button>
            <button className="bg-dark-green text-white shadow py-3 px-5">Cancel Appoint</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
