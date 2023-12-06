import React from "react";
import HeroComp from "../../components/HeroComp";
import Image from "next/image";
import ContactUs from "./contactUs";
import Date from "./DateTime";

const Appointment = () => {
  return (
    <div className="mb-[10rem]">
      <HeroComp title="Appointment" />
      <div className="flex justify-center flex-col-reverse lg:flex-row p-[1rem] mb-[5rem] lg:px-[4rem] lg:py-[7rem]">
        <div className="w-full lg:w-[50%] flex flex-col ">
          {/* date */}
          <div className="bottom-0 pt-[1rem] text-slate-500">
            <div className="">
              <h2>Available Appointment On December 2, 2023</h2>
              <p> 11:00 am – 12:00 p</p>
            </div>
            <div>
              <button className="text-white py-3 px-5 bg-dark-gold mt-2">Book Appointment</button>
            </div>
          </div>
        </div>
        <aside className="w-full lg:w-[50%] py-5 ">
          <div className="relative">
            <div className="text-3xl lg:text-6xl font-normal font-bubblegum text-dark-green xl:pr-[10rem]">
              <span>Fullbeauty </span>
              <span className="relative p-2">
                <span> Working</span>
                <Image
                  src={"/circle.svg"}
                  alt="circle.svg"
                  width={500}
                  height={500}
                  className="w-[10rem] lg:w-[18rem] xl:w-[19rem] absolute top-1 right-[0]"
                />
              </span>
              <span>Hours</span>
            </div>
          </div>
          <p className="py-[3rem] text-[17px] lg:text-[19px] text-slate-500 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse animi ipsam cumque
            consectetur nostrum tempore quasi sequi molestiae doloribus! Illum.
          </p>
          <div className="text-[17px] text-slate-500 lg:w-[80%]">
            <div className="flex justify-between">
              <aside>Monday TO Friday</aside>
              <aside>10:00 am to 3:00 pm</aside>
            </div>
            <div className="flex justify-between">
              <aside>Saturday</aside>
              <aside>10:00 am to 5:00 pm</aside>
            </div>
            <div className="flex justify-between">
              <aside>Sunday</aside>
              <aside>close</aside>
            </div>
          </div>
        </aside>
      </div>
      <ContactUs />
    </div>
  );
};

export default Appointment;
