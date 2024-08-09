// import { Metadata } from "next";
"use client";

import { useDispatch, useSelector } from "react-redux";
import { useUpdateUserDetailMutation } from "../../../../../../redux/services/AuthApiSlice";
import { ChangeEvent, FormEvent, useState } from "react";

// export const metadata: Metadata = {
//   title: "Edit details",
// };
const EditDetail = () => {
  const [updateUserDetail, { isLoading, isSuccess }] = useUpdateUserDetailMutation();

  const [confirmPassword, setConfirmPassword] = useState("");
  const [userDetail, setUserDetails] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetail) => ({ ...prevDetail, [name]: value }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (userDetail.password === confirmPassword) {
      try {
        const res = await updateUserDetail({ ...userDetail }).unwrap();
        if (isSuccess) {
          console.log(res);
        }
      } catch (error) {}
    } else {
      console.log("Password did not match");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white p-5 text-xl text-slate-600 mb-[5rem] lg:p-[2rem]">
        <div className="mb-[1rem]">
          <label className="font-bold block mb-2" htmlFor="firstName">
            First name:
          </label>
          <input
            type="text"
            placeholder="Enter first name"
            name="firstName"
            onChange={handleChange}
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
            name="surname"
            onChange={handleChange}
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
            name="email"
            onChange={handleChange}
            className="w-full lg:border-b-[1px] border-0 lg:px-0"
          />
        </div>
        <div className="mb-[1rem] lg:mb-[2rem]">
          <label className="font-bold block mb-2" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
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
            name="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            placeholder="Enter password"
            className="w-full lg:border-b-[1px] border-0 lg:px-0"
          />
        </div>
        <div>
          <button
            type="submit"
            className="text-white bg-dark-green hover:bg-dark-gold py-3 px-8 lg:my-[1rem]">
            Edit Details
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditDetail;
