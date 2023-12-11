import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[70vh] bg-white flex justify-center p-[2rem] py-[5rem] ">
      <div className="w-[90%] flex justify-center gap-[6rem]">
        <div className="relative">
          <div className="w-[25rem] relative z-[2] h-[25rem] bg-dark-green"></div>
          <Image
            src={"/left-1.png"}
            width={500}
            height={500}
            alt="leaf"
            className="absolute -top-0 -left-[10rem] "
          />
          <Image
            src={"/vertical.png"}
            width={500}
            height={500}
            alt="leaf"
            className="absolute -top-[8rem] z-[5]"
          />
        </div>
        <div className="text-[8rem] font-dancing text-dark-green">
          <h1 className=" p-0">Be </h1>
          <h1 className="-mt-[4rem]">Gorgeous!</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
