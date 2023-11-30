import HeroComp from "@/app/(App)/components/HeroComp";
import { Metadata } from "next";
import React, { Fragment } from "react";
import { convertDateFormat } from "../../../../../../utilities/extras";
export const metadata: Metadata = {
  title: "My appointments",
};
const title = ["date", "service", "type", "action"];

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
  return (
    <div className="bg-white p-2 lg:py-3  lg:px-[2rem] text-xl text-slate-600 mb-[5rem] shadow">
      <div className={`table-grid bg-dark-gold text-white capitalize p-2`}>
        {title.map((head) => (
          <div key={head}>{head}</div>
        ))}
      </div>
      <div className="text-sm lg:text-base mt-[1rem] capitalize">
        {appointments.map((app) => {
          return (
            <Fragment key={app.id}>
              <div className="table-grid py-2">
                <div>{convertDateFormat(app.date)}</div>
                <div>{app.service}</div>
                <div>{app.type}</div>
                <div>
                  <button className="py-2 px-5 bg-dark-green hover:bg-dark-gold text-white">
                    {app.action}
                  </button>
                </div>
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Appointments;
