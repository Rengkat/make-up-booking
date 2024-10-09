import React from "react";
import HeroComp from "../../../../components/HeroComp";
import ContactUs from "./contactUs";
import AppointmentServices from "./Services";

const Appointment = () => {
  return (
    <div className="mb-[10rem] bg-light-gray">
      {/* Hero Section */}
      <HeroComp title="Appointment" />

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row justify-center lg:gap-[3rem] p-[1rem] mb-[5rem] lg:px-[4rem] lg:py-[7rem]">
        {/* Services Section */}
        <div className="w-full lg:w-[50%]">
          <AppointmentServices />
        </div>

        {/* Working Hours Section */}
        <aside className="w-full lg:w-[50%] pb-5">
          <div className="relative mb-5">
            <div className="text-4xl lg:text-6xl font-normal font-bubblegum text-dark-green">
              <span>Fullbeauty </span>
              <span className="relative p-2 text-highlight">Working Hours</span>
            </div>
          </div>

          {/* Description */}
          <p className="py-[1rem] text-[17px] lg:text-[19px] text-slate-600 font-normal">
            Discover our flexible appointment hours designed to accommodate your schedule.
          </p>

          {/* Working Hours */}
          <div className="text-[17px] text-slate-600 lg:w-[80%] bg-white shadow-lg rounded-md p-4">
            <div className="flex justify-between border-b border-gray-300 py-2">
              <span>Monday to Friday</span>
              <span>10:00 am to 3:00 pm</span>
            </div>
            <div className="flex justify-between border-b border-gray-300 py-2">
              <span>Saturday</span>
              <span>10:00 am to 5:00 pm</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>
        </aside>
      </div>

      {/* Contact Us Section */}
      <ContactUs />
    </div>
  );
};

export default Appointment;
