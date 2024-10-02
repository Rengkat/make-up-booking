"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import {
  useDeleteAddressMutation,
  useGetUserDetailsQuery,
} from "../../../../../../redux/services/UserApiSlice";

const AddressComp = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { isLoading, data, error, isSuccess } = useGetUserDetailsQuery({});
  const [deleteAddress, { isLoading: isDeleting }] = useDeleteAddressMutation();

  const addresses: any = data?.user?.addresses;

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteAddress({ addressId: id }).unwrap();
      setSuccessMessage("Address deleted successfully.");
      // Optionally, you can refetch the data here or update state manually.
    } catch (err) {
      console.error("Error deleting address", err);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching addresses. Please try again later.</p>;
  }

  return (
    <>
      {addresses?.length < 1 ? (
        <div>You don't have any address. Please add an address.</div>
      ) : (
        addresses.map((address: any, i: number) => (
          <Fragment key={address._id}>
            <div className="border-b-[1px] border-slate-200 my-5">
              <h1 className="text-2xl font-light">Address {i + 1}</h1>
              <div className="flex justify-between ">
                <div className="flex flex-col lg:flex-row lg:justify-between w-[90%]">
                  <aside className="lg:w-1/2">
                    <div className="my-5">
                      <label htmlFor="country" className="my-2 font-semibold">
                        Country:
                      </label>
                      <div className="text-base">{address?.country}</div>
                    </div>
                    <div className="my-5">
                      <label htmlFor="state" className="my-2 font-semibold">
                        State:
                      </label>
                      <div className="text-base">{address?.state}</div>
                    </div>
                    <div className="my-5">
                      <label htmlFor="city" className="my-2 font-semibold">
                        City:
                      </label>
                      <div className="text-base">{address?.city}</div>
                    </div>
                  </aside>
                  <aside className="lg:w-1/2">
                    <div className="my-5">
                      <label htmlFor="town" className="my-2 font-semibold">
                        Town:
                      </label>
                      <div className="text-base">{address?.town}</div>
                    </div>
                    <div className="my-5">
                      <label htmlFor="landmark" className="my-2 font-semibold">
                        Nearest Landmark:
                      </label>
                      <div className="text-base">{address?.nearestLandmark}</div>
                    </div>
                    <div className="my-5">
                      <label htmlFor="homeAddress" className="my-2 font-semibold">
                        Home Address:
                      </label>
                      <div className="text-base">{address?.homeAddress}</div>
                    </div>
                  </aside>
                </div>
                <aside className="w-[10%]">
                  <Link href={`/account/addresses/${address?._id}`}>
                    <div className="bg-dark-gold text-white rounded size-8 grid place-content-center cursor-pointer">
                      <MdEdit fontSize={25} />
                    </div>
                  </Link>
                  <div
                    onClick={() => handleDelete(address._id)}
                    className="bg-dark-gold text-white rounded size-8 grid place-content-center mt-5 cursor-pointer">
                    <MdDelete fontSize={25} />
                  </div>
                </aside>
              </div>
            </div>
          </Fragment>
        ))
      )}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
    </>
  );
};

export default AddressComp;
