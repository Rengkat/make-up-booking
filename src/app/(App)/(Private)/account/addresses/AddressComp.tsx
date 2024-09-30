import Link from "next/link";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
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
          <label htmlFor="country" className="my-2 font-semibold">
            Nearest Landmark:
          </label>
          <div className="text-base">COCIN Church Sabon Barki</div>
        </div>
        <div className="my-5">
          <label htmlFor="country" className="my-2 font-semibold">
            Home Address:
          </label>
          <div className="text-base">No 24, Alexander Street</div>
        </div>
      </aside>
      <aside>
        <Link href={"/account/addresses/edit-address"}>
          {" "}
          <div className="bg-dark-gold text-white rounded size-8 grid place-content-center cursor-pointer">
            <MdEdit fontSize={25} />
          </div>
        </Link>
        <div className="bg-dark-gold text-white rounded size-8 grid place-content-center mt-5 cursor-pointer">
          <MdDelete fontSize={25} />
        </div>
      </aside>
    </div>
  );
};

export default AddressComp;
