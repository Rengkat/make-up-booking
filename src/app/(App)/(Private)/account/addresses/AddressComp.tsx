import React from "react";

const AddressComp = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <aside className="lg:w-1/2">
        <div className="my-5">
          <label htmlFor="country" className="my-2 font-semibold">
            Country:
          </label>
          <div className="text-base">Nigeria</div>
        </div>
        <div className="my-5">
          <label htmlFor="country" className="my-2 font-semibold">
            State:
          </label>
          <div className="text-base">Plateau State</div>
        </div>
        <div className="my-5">
          <label htmlFor="country" className="my-2 font-semibold">
            City:
          </label>
          <div className="text-base">Jos</div>
        </div>
      </aside>
      <aside className="lg:w-1/2">
        <div className="my-5">
          <label htmlFor="country" className="my-2 font-semibold">
            Town:
          </label>
          <div className="text-base">Mangu</div>
        </div>
        <div className="my-5">
          <label htmlFor="country">Nearest Landmark:</label>
          <div className="text-base">COCIN Church Sabon Barki</div>
        </div>
        <div className="my-5">
          <label htmlFor="country" className="my-2 font-semibold">
            Home Address:
          </label>
          <div className="text-base">No 24, Alexander Street</div>
        </div>
      </aside>
    </div>
  );
};

export default AddressComp;
