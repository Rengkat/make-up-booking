"use client";
import { useState } from "react";
import { convertDate } from "../../../../../utilities/extras";
import BookingModal from "./BookingModal";

export default function AppointmentDate() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const converted = (inputDate: Date | string) => {
    const parsedDate = new Date(inputDate);
    const formattedDate = `${parsedDate.getFullYear()}-${(parsedDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${parsedDate.getDate().toString().padStart(2, "0")}`;

    return formattedDate;
  };

  // Format date
  const displayDate = convertDate(new Date(date));

  // Delay when clicked
  const handleOpenModal = () => {
    setIsLoading(true);
    setIsModelOpen((prev) => !prev);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  // Handle time selection
  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTime(e.target.value);
  };

  return (
    <>
      <div className="lg:w-[100%] mt-[1rem]">
        <input
          onChange={(e) => setDate(converted(e.target.value))}
          value={date}
          type="date"
          name="date"
          id="date"
          className="w-full lg:w-[70%] lg:py-4 px-2 placeholder:text-xl mt-[3rem] lg:mt-0"
        />
      </div>

      {date && (
        <div className="bottom-0 pt-[1rem] text-slate-500">
          <div className="">
            <h2>Available Appointment On {displayDate}</h2>
            <p>Choose a time:</p>
            <select value={time} onChange={handleTimeChange} className="mt-2 border rounded p-2">
              <option value="" disabled>
                Select a time
              </option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
              <option value="4:00 PM">4:00 PM</option>
            </select>
          </div>
          <div>
            <button
              onClick={handleOpenModal}
              className="text-white py-3 px-5 bg-dark-gold mt-2"
              disabled={!time} // Disable if no time is selected
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}

      {!date && (
        <p className="my-2 text-xl text-dark-green">
          Choose a flexible date for us to serve you better
        </p>
      )}

      <div>
        {isModelOpen && (
          <div className="fixed z-20 bg-[#00000094] inset-0 w-full h-screen">
            {isLoading ? (
              <div className="w-full h-screen text-white font-bold flex items-center justify-center text-xl">
                <p>Loading...</p>
              </div>
            ) : (
              <BookingModal closeModal={handleOpenModal} displayDate={displayDate} time={time} />
            )}
          </div>
        )}
      </div>
    </>
  );
}
