"use client";
import Link from "next/link";
import React, { Fragment } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { useGetUserDetailsQuery } from "../../../../../../redux/services/UserApiSlice";
const AddressComp = () => {
  const { isLoading, data, error, isSuccess } = useGetUserDetailsQuery({});
  console.log(data);
  const addresses: any = data?.user.addresses;
  console.log(addresses);
  {
    isLoading && <p>Loading...</p>;
  }
  return (
    <>
      {addresses?.map((address: any, i: number) => {
        return (
          <Fragment>
            <div className="border-b-[1px] border-slate-200 my-5">
              <h1 className="text-2xl font-light">Address {i + 1}</h1>
              <div className="flex flex-col lg:flex-row lg:justify-between">
                <aside className="lg:w-1/2">
                  <div className="my-5">
                    <label htmlFor="country" className="my-2 font-semibold">
                      Country:
                    </label>
                    <div className="text-base">{address?.country}</div>
                  </div>
                  <div className="my-5">
                    <label htmlFor="country" className="my-2 font-semibold">
                      State:
                    </label>
                    <div className="text-base">{address?.state}</div>
                  </div>
                  <div className="my-5">
                    <label htmlFor="country" className="my-2 font-semibold">
                      City:
                    </label>
                    <div className="text-base">{address.city}</div>
                  </div>
                </aside>
                <aside className="lg:w-1/2">
                  <div className="my-5">
                    <label htmlFor="country" className="my-2 font-semibold">
                      Town:
                    </label>
                    <div className="text-base">{address?.town}</div>
                  </div>
                  <div className="my-5">
                    <label htmlFor="country" className="my-2 font-semibold">
                      Nearest Landmark:
                    </label>
                    <div className="text-base">{address?.nearestLandmark}</div>
                  </div>
                  <div className="my-5">
                    <label htmlFor="country" className="my-2 font-semibold">
                      Home Address:
                    </label>
                    <div className="text-base">{address.homeAddress}</div>
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
            </div>
          </Fragment>
        );
      })}
    </>
  );
};

export default AddressComp;
