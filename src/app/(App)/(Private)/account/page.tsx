// "use client";
import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

const Profile = () => {
  // const [fetchedUser, setFetchedUser] = useState({});
  // const { user } = useSelector((store: any) => store.auth);
  // const { user: userDetail, token } = user;

  // useEffect(() => {
  //   const fetchDetailUser = async () => {
  //     const response = await fetch("http://localhost:5000/api/users/profile", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     const data = response.json();
  //   };
  // });
  return (
    <div className="bg-white p-5 lg:py-3  lg:px-[2rem] text-xl text-slate-600 mb-[5rem]">
      <div className="border-b-[1px] my-2 lg:mb-[2rem]">
        <label className="font-bold lg:font-semibold lg:text-xl my-4" htmlFor="firstName">
          First name:
        </label>
        <p className="pb-2 lg:font-light lg:text-base lg:py-3">Alexander</p>
      </div>
      <div className="border-b-[1px] my-2 lg:my-[2rem]">
        <label className="font-bold lg:font-semibold lg:text-xl my-4 " htmlFor="firstName">
          Surname:
        </label>
        <p className="pb-2 lg:font-light lg:text-base lg:py-3">Rengkat</p>
      </div>
      <div className="border-b-[1px] my-2 lg:my-[2rem]">
        <label className="font-bold lg:font-semibold lg:text-xl my-4 " htmlFor="firstName">
          Email:
        </label>
        <p className="pb-2 lg:font-light lg:text-base lg:py-3">rengkatalexander@gmail.com</p>
      </div>
      <div className="border-b-[1px] my-2 lg:my-[2rem]">
        <label className="font-bold lg:font-semibold lg:text-xl my-4 " htmlFor="password">
          Password
        </label>
        <p className="pb-2 lg:font-light lg:text-base lg:py-3">***********</p>
      </div>
      <div>
        <button className="text-white bg-dark-green hover:bg-dark-gold py-3 px-8 lg:my-5">
          <Link href={"/account/edit-detail"}>Edit Details</Link>
        </button>
      </div>
    </div>
  );
};

export default Profile;
