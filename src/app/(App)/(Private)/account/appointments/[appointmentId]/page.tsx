"use client";
import React, { Fragment } from "react";
import { useGetSingleUserAppointmentsQuery } from "../../../../../../../redux/services/AppointmentApiSlice";
import { convertDate } from "../../../../../../../utilities/extras";
const fetchedAppointments = false;
interface Props {
  params: { appointmentId: string };
}
const Appointment = ({ params }: Props) => {
  const id = params.appointmentId;
  const { data, isLoading } = useGetSingleUserAppointmentsQuery({ id });
  if (isLoading) {
    <div className="text-xl text-dark-green flex justify-center">
      <p>Loading...</p>
    </div>;
  }
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
              <div className={`${data?.appointment?.service === "spa" && "hidden"} pb-2`}>
                Home Address:
              </div>
              <div className="pb-4">Status:</div>
            </div>
            <div className="">
              <h1 className="pb-2 font-bold">{data?.appointment?.service}</h1>
              <div className="pb-2">{convertDate(data?.appointment?.date)}</div>
              <div className="pb-2">{data?.appointment?.time}</div>
              <div className="pb-2 capitalize">{data?.appointment?.type} </div>
              <div className="pb-2 capitalize">
                {data?.appointment?.address?.homeAddress}, {data?.appointment?.address?.town}
                {data?.appointment?.address?.state}, {data?.appointment?.address?.country}
              </div>
              <div className="flex items-center pb-4">
                <span
                  className={`${
                    data?.appointment?.status === "cancelled"
                      ? "bg-red-600"
                      : data?.appointment?.status === "pending"
                      ? "bg-dark-gold"
                      : "bg-green-600"
                  } pb-2 pt-1 px-2 rounded-lg text-white`}>
                  {data?.appointment?.status}
                </span>
              </div>
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
