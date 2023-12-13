import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="bg-white py-[5rem] lg:py-[10rem]">
      <div className="flex w-full justify-center text-xl md:text-4xl lg:text-6xl font-semibold text-dark-green">
        <div className="relative w-[6.5rem] md:w-[12rem] lg:w-[20%] ">
          <span>Experience</span>
          <Image
            src={"/circle.svg"}
            width={500}
            height={500}
            alt="leaf"
            className="absolute -top-[0rem] lg:-top-[1.5rem] md:-top-[1rem] -left-[5px] lg:-left-[1rem] z-[5] w-[100%] md:w-[100%] lg:w-[100%] "
          />
        </div>
        <span> Our Services</span>
      </div>
    </div>
  );
};

export default Services;
