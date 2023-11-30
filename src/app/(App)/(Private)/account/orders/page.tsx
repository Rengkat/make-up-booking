import { Metadata } from "next";
import React, { Fragment } from "react";
import { convertDate } from "../../../../../../utilities/extras";
export const metadata: Metadata = {
  title: "My orders",
};
const title = ["order", "date", "status", "total", "action"];

const appointments = [
  {
    id: 5,
    date: "2023-11-30T18:42:59.000Z",
    status: "on hold",
    total: "$45 for 3 items",
    action: "View",
    orderId: "#123",
  },
  {
    id: 5,
    date: "2023-11-30T18:42:59.000Z",
    status: "delivered",
    total: "$45 for 3 items",
    action: "View",
    orderId: "#123",
  },
];
const Orders = () => {
  return (
    <div className="bg-white p-2 lg:py-3  lg:px-[2rem] text-xl text-slate-600 mb-[5rem] shadow">
      <div className={`order-grid bg-dark-gold text-white capitalize p-2`}>
        {title.map((head) => (
          <div key={head}>{head}</div>
        ))}
      </div>
      <div className="text-sm lg:text-base mt-[1rem] capitalize">
        {appointments.map((app) => {
          return (
            <Fragment key={app.id}>
              <div className="order-grid py-2">
                <div>{app.orderId}</div>
                <div>{convertDate(app.date)}</div>
                <div>{app.status}</div>
                <div>{app.total}</div>
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

export default Orders;
