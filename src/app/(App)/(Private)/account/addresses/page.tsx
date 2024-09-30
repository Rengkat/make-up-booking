import { Metadata } from "next";
import React from "react";
import AddressComp from "./AddressComp";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Address",
};
const Addresses = () => {
  return (
    <div className=" bg-white p-2 lg:py-3  lg:px-[2rem] text-xl text-slate-600 mb-[5rem] shadow">
      <div className="border-b-[1px] border-slate-200 my-5">
        <h1 className="text-2xl font-light">Address 1</h1>

        <AddressComp />
      </div>
      <h1 className="text-2xl font-light">Address 2</h1>
      <AddressComp />
      <button className="py-3 px-5 my-[1rem] bg-dark-green shadow text-white hover:bg-dark-gold">
        <Link href={"/account/addresses/add-address"}>Add Address</Link>
      </button>
    </div>
  );
};

export default Addresses;
