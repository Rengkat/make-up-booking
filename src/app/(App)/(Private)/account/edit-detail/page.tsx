import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Edit details",
};
const EditDetail = () => {
  return (
    <div className="bg-white p-5 text-xl text-slate-600 mb-[5rem] lg:p-[2rem]">
      <div className="mb-[1rem]">
        <label className="font-bold block mb-2" htmlFor="firstName">
          First name:
        </label>
        <input
          type="text"
          placeholder="Enter first name"
          className="w-full lg:border-b-[1px] border-0 lg:px-0"
        />
      </div>
      <div className="mb-[1rem] lg:mb-[2rem]">
        <label className="font-bold block mb-2" htmlFor="firstName">
          Surname:
        </label>
        <input
          type="text"
          placeholder="Enter surname"
          className="w-full lg:border-b-[1px] border-0 lg:px-0"
        />
      </div>
      <div className="mb-[1rem] lg:mb-[2rem]">
        <label className="font-bold block mb-2" htmlFor="firstName">
          Email:
        </label>
        <input
          type="email"
          placeholder="Enter email"
          className="w-full lg:border-b-[1px] border-0 lg:px-0"
        />
      </div>
      <div className="mb-[1rem] lg:mb-[2rem]">
        <label className="font-bold block mb-2" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full lg:border-b-[1px] border-0 lg:px-0"
        />
      </div>
      <div className="mb-[1rem] lg:mb-[2rem]">
        <label className="font-bold block mb-2" htmlFor="password">
          Confirm Password:
        </label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full lg:border-b-[1px] border-0 lg:px-0"
        />
      </div>
      <div>
        <button className="text-white bg-dark-green hover:bg-dark-gold py-3 px-8 lg:my-[1rem]">
          Edit Details
        </button>
      </div>
    </div>
  );
};

export default EditDetail;
