import React from "react";

const EditAddress = () => {
  return (
    <div className="bg-white p-5 shadow">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-[1rem]">
        <aside className="lg:w-1/2">
          <div className="my-5">
            <label htmlFor="country" className="my-2 font-semibold">
              Country:
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full border-b-[1px] border-0 px-0"
            />
          </div>
          <div className="my-5">
            <label htmlFor="country" className="my-2 font-semibold">
              State:
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full border-b-[1px] border-0 px-0"
            />
          </div>
          <div className="my-5">
            <label htmlFor="country" className="my-2 font-semibold">
              City:
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full border-b-[1px] border-0 px-0"
            />
          </div>
        </aside>
        <aside className="lg:w-1/2">
          <div className="my-5">
            <label htmlFor="country" className="my-2 font-semibold">
              Town:
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full border-b-[1px] border-0 px-0"
            />
          </div>
          <div className="my-5">
            <label htmlFor="country">Nearest Landmark:</label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full border-b-[1px] border-0 px-0"
            />
          </div>
          <div className="my-5">
            <label htmlFor="country" className="my-2 font-semibold">
              Home Address:
            </label>
            <input
              type="text"
              placeholder="Enter first name"
              className="w-full border-b-[1px] border-0 px-0"
            />
          </div>
        </aside>
      </div>
      <button className="py-3 px-8 my-[1rem] bg-dark-green shadow text-white hover:bg-dark-gold">
        Save
      </button>
    </div>
  );
};

export default EditAddress;
