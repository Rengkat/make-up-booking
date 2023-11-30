import React from "react";

const Profile = () => {
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
          Edit Details
        </button>
      </div>
    </div>
  );
};

export default Profile;
