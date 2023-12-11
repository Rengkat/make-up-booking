import { Metadata } from "next";
import React, { Fragment } from "react";
export const metadata: Metadata = {
  title: "My wishlist",
};
const title = ["S/No", "Image", "Name", "price", "action"];

const appointments = [
  {
    id: 5,
    image: "2023-11-30T18:42:59.000Z",
    product: "makeup Kit",
    price: "$45",
    action: "View",
  },
  {
    id: 5,
    image: "2023-11-30T18:42:59.000Z",
    product: "Lib glue",
    price: "$75",
    action: "View",
  },
];
const Wishlist = () => {
  return (
    <div className="bg-white p-2 lg:py-3  lg:px-[2rem] text-xl text-slate-600 mb-[5rem] shadow">
      <div className={`wishlist-grid bg-dark-gold text-white capitalize p-2`}>
        {title.map((head) => (
          <div key={head}>{head}</div>
        ))}
      </div>
      <div className="text-sm lg:text-base mt-[1rem] capitalize">
        {appointments.map((app, i) => {
          return (
            <Fragment key={app.id}>
              <div className="wishlist-grid py-2">
                <div className="pl-5">{i + 1}</div>
                <div>{app.image}</div>
                <div>{app.product}</div>
                <div>{app.price}</div>
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

export default Wishlist;
