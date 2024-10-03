"use client";
import React, { ChangeEvent, FormEvent, ReactNode, useEffect, useState } from "react";
import {
  useGetSingleAddressQuery,
  useUpdateAddressMutation,
} from "../../../../../../../redux/services/UserApiSlice";
interface Props {
  params: { addressId: string };
}
const EditAddress = ({ params }: Props) => {
  const { addressId } = params;
  const { data, isLoading } = useGetSingleAddressQuery({ addressId });
  const [updateAddress, { isLoading: isUpdating, isSuccess, isError }] = useUpdateAddressMutation();
  const fetchedAddress = data?.address;

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [address, setAddress] = useState({
    country: "",
    state: "",
    city: "",
    town: "",
    landmark: "",
    homeAddress: "",
  });
  useEffect(() => {
    setAddress({
      country: fetchedAddress?.country || "",
      state: fetchedAddress?.state || "",
      city: fetchedAddress?.city || "",
      town: fetchedAddress?.town || "",
      landmark: fetchedAddress?.landmark || "",
      homeAddress: fetchedAddress?.homeAddress || "",
    });
  }, [fetchedAddress]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const requestBody = {
      addressId,
      updatedAddress: address,
    };
    try {
      const res = await updateAddress(requestBody).unwrap();
      setSuccessMessage(res.message);
      setAddress({
        country: "",
        state: "",
        city: "",
        town: "",
        landmark: "",
        homeAddress: "",
      });
    } catch (err: any) {
      setErrorMessage(err.data.message);
    }
  };
  {
    isLoading && (
      <div className="flex justify-center text-xl text-dark-green">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-5 shadow">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-[1rem]">
        <aside className="lg:w-1/2">
          <div className="my-5">
            <label htmlFor="country" className="my-2 font-semibold">
              Country:
            </label>
            <input
              onChange={handleChange}
              value={address.country}
              type="text"
              name="country"
              placeholder="Enter Country"
              className="w-full border-b-[1px] border-0 px-0"
            />
          </div>
          <div className="my-5">
            <label htmlFor="country" className="my-2 font-semibold">
              State:
            </label>
            <input
              type="text"
              placeholder="Enter State"
              name="state"
              onChange={handleChange}
              value={address.state}
              className="w-full border-b-[1px] border-0 px-0"
            />
          </div>
          <div className="my-5">
            <label htmlFor="country" className="my-2 font-semibold">
              City:
            </label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
              value={address.city}
              placeholder="Enter City"
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
              placeholder="Enter Town"
              name="town"
              onChange={handleChange}
              value={address.town}
              className="w-full border-b-[1px] border-0 px-0"
            />
          </div>
          <div className="my-5">
            <label htmlFor="country">Nearest Landmark:</label>
            <input
              type="text"
              name="landmark"
              onChange={handleChange}
              value={address.landmark}
              placeholder="Enter nearest landmark e.g Bus stop"
              className="w-full border-b-[1px] border-0 px-0"
            />
          </div>
          <div className="my-5">
            <label htmlFor="country" className="my-2 font-semibold">
              Home Address:
            </label>
            <input
              type="text"
              placeholder="Enter Home Address e.g 12 Abuja road"
              name="homeAddress"
              onChange={handleChange}
              value={address.homeAddress}
              className="w-full border-b-[1px] border-0 px-0"
            />
          </div>
        </aside>
      </div>
      {!isLoading && isSuccess && (
        <div className="bg-orange-300 text-dark-gold font-semibold text-center p-2">
          {successMessage}
        </div>
      )}
      {/* Error message */}
      {!isLoading && isError && (
        <div className="bg-red-300 text-red-600 font-semibold text-center p-2">{errorMessage}</div>
      )}
      <button
        onClick={handleSubmit}
        className="py-3 px-8 my-[1rem] bg-dark-green shadow text-white hover:bg-dark-gold">
        {isUpdating ? "Updating..." : "Update"}
      </button>
    </div>
  );
};

export default EditAddress;
