"use client";
import { useState } from "react";
interface Props {
  closeModal: () => void;
  displayDate: string;
}
const BookingModal = ({ closeModal, displayDate }: Props) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full md:w-[70%] lg:w-[40%] h-[50vh] bg-white">
        <div className="w-full bg-dark-gold text-white flex justify-between py-3 px-5">
          <h1>REQUEST AN APPOINTMENT</h1>
          <button onClick={closeModal}>X</button>
        </div>
        <section className=" p-5 text-[18px]">
          <p className="text-sm lg:text-base">
            You are about to request an appointment for Rengkat Alexander. Please review and confirm
            that you would like to request the following appointment:
          </p>
          <div className="border-2 p-2 my-5 lg:my-2 text-[17px] md:text-[20px]">
            {displayDate} at 11:00 am – 12:00 pm
          </div>
          <div className="flex items-end gap-5 my-4">
            <label
              htmlFor="services"
              className="text-[18px] md:text-[20px] font-semibold text-dark-green">
              Services:
            </label>{" "}
            <select name="services" id="services" className="w-full border-[1px]">
              <option>Chose...</option>
              <option>Suna Relax</option>
              <option>Nutritionist</option>
              <option>Hot Stone Massage</option>
            </select>
          </div>
          <div className="flex gap-5 my-[2rem]">
            <button className="py-2 text-sm lg:text-base bg-dark-green text-white px-4 shadow w-full lg:w-[70%]">
              Request Appointment
            </button>
            <button
              onClick={closeModal}
              className="py-2 text-sm lg:text-base bg-dark-gold text-white px-4 shadow w-full lg:w-[30%]">
              Cancel
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BookingModal;
