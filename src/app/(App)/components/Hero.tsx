import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className=" flex justify-center p-[2rem] py-[5rem] ">
        <div className="w-full lg:w-[90%] flex flex-col-reverse lg:flex-row justify-center gap-[6rem]">
          <div className="relative">
            <div className="w-[90%] lg:w-[25rem] mx-auto lg:mx-0 relative z-[2] h-[20rem] lg:h-[25rem] bg-dark-green"></div>
            <Image
              src={"/left-1.png"}
              width={500}
              height={500}
              alt="leaf"
              className="absolute w-[60%] top-5 - lg:-top-0 -left-[5rem] lg:-left-[10rem] "
            />
            <Image
              src={"/vertical.png"}
              width={500}
              height={500}
              alt="leaf"
              className="absolute -top-[8rem] z-[5]"
            />
          </div>
          <div className="text-7xl lg:text-[8rem] font-dancing text-dark-green">
            <h1 className=" p-0">Be </h1>
            <h1 className="my-5">Gorgeous!</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-[60%] h-[15rem] mb-5 font-dancing bg-dark-green"></div>
      </div>
    </>
  );
};

export default Hero;
