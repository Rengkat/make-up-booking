"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { useAddAddressMutation } from "../../../../../../../redux/services/UserApiSlice";

interface Address {
  country: string;
  state: string;
  city: string;
  town: string;
  nearestLandmark: string;
  homeAddress: string;
}

interface ApiResponse {
  data?: {
    message: string;
  };
  error?: {
    data: {
      message: string;
    };
  };
}

const AddAddress = () => {
  const [addAddress, { error, isLoading, isError, isSuccess }] = useAddAddressMutation();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [address, setAddress] = useState<Address>({
    country: "",
    state: "",
    city: "",
    town: "",
    nearestLandmark: "",
    homeAddress: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res: ApiResponse = await addAddress({ address: { ...address } }).unwrap();

      setSuccessMessage(res?.data?.message || "Address added successfully!");

      setAddress({
        country: "",
        state: "",
        city: "",
        town: "",
        nearestLandmark: "",
        homeAddress: "",
      });
    } catch (err) {
      if (isError && error && (error as any).data) {
        const errorData = error as { data: { message: string } };
        setErrorMessage(errorData.data.message);
      } else {
        setErrorMessage("An error occurred while adding the address.");
      }
    }
  };

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
              name="nearestLandmark"
              onChange={handleChange}
              value={address.nearestLandmark}
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
        {isLoading ? "Saving..." : "Save"}
      </button>
    </div>
  );
};

export default AddAddress;
