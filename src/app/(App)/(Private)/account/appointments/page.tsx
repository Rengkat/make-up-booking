"use client";
import HeroComp from "@/components/HeroComp";
import { Metadata } from "next";
import React, { Fragment } from "react";
import { convertDateFormat } from "../../../../../../utilities/extras";
import { useGetAllUserAppointmentsQuery } from "../../../../../../redux/services/AppointmentApiSlice";
import Link from "next/link";
// export const metadata: Metadata = {
//   title: "My appointments",
// };
const title = ["date", "service", "type", "status", "action"];

const appointments = [
  {
    id: 5,
    date: "2023-11-30T18:42:59.000Z",
    service: "Hot stone massage",
    type: "home service",
    action: "View",
  },
  {
    id: 8,
    date: "2023-12-30T18:42:59.000Z",
    service: "oxygen facials",
    type: "Spa",
    action: "View",
  },
];

const Appointments = () => {
  const { data, isLoading, error } = useGetAllUserAppointmentsQuery({});
  const fetchedAppointments = data?.appointments;

  {
    isLoading && (
      <div className="flex justify-center text-xl text-dark-green">
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div className="bg-white p-2 lg:py-3  lg:px-[2rem] text-xl text-slate-600 mb-[5rem] shadow">
      {fetchedAppointments?.length < 1 ? (
        <div>You do not have any appointment at the moment</div>
      ) : (
        <div>
          <div className={`table-grid-appointment bg-dark-gold text-white capitalize p-2`}>
            {title.map((head) => (
              <div key={head}>{head}</div>
            ))}
          </div>
          <div className="text-sm lg:text-base mt-[1rem] capitalize">
            {fetchedAppointments?.map((app: any) => {
              return (
                <Fragment key={app._id}>
                  <div className="table-grid-appointment py-2">
                    <div>{convertDateFormat(app.date)}</div>
                    <div>{app.service}</div>
                    <div>{app.type}</div>
                    <div
                      className={`${
                        app?.status === "cancelled"
                          ? "text-red-600"
                          : app?.status === "pending"
                          ? "text-dark-gold"
                          : "text-dark-green"
                      } font-semibold`}>
                      {app.status}
                    </div>
                    <div>
                      <Link
                        href={`/account/appointments/${app._id}`}
                        className="py-2 px-5 bg-dark-green hover:bg-dark-gold text-white">
                        View
                      </Link>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointments;
