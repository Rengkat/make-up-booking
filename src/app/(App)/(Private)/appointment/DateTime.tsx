"use client";
import { Datepicker } from "flowbite-react";
import { useState } from "react";
import { convertDate } from "../../../../../utilities/extras";
import BookingModal from "./BookingModal";
export default function AppointmentDate() {
  const [date, setDate] = useState("");
  const converted = (inputDate: Date | string) => {
    const parsedDate = new Date(inputDate);
    const formattedDate = `${parsedDate.getFullYear()}-${(parsedDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${parsedDate.getDate().toString().padStart(2, "0")}`;

    return formattedDate;
  };
  const displayDate = convertDate(new Date(date));
  return (
    <>
      <div className=" lg:w-[100%] mt-[1rem]">
        <input
          onChange={(e) => setDate(converted(e.target.value))}
          value={date}
          type="date"
          name="date"
          id="date"
          className="w-full lg:w-[70%] lg:py-4 px-2 placeholder:text-xl mt-[3rem] lg:mt-0"
        />
      </div>
      {date ? (
        <div className="bottom-0 pt-[1rem] text-slate-500">
          <div className="">
            <h2>Available Appointment On {displayDate} </h2>
            <p> 11:00 am – 12:00 pm</p>
          </div>
          <div>
            <button className="text-white py-3 px-5 bg-dark-gold mt-2">Book Appointment</button>
          </div>
        </div>
      ) : (
        <>
          <p className="my-2 text-xl text-dark-green">
            Chose a flexible date for us to serve you better
          </p>
        </>
      )}
      <div className=" fixed z-20 bg-[#00000094] inset-0 w-full h-screen">
        <BookingModal />
      </div>
    </>
  );
}
