import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className=" flex justify-center px-[2rem] py-[5rem] ">
        <div className="w-full lg:w-[80%] lg:mt-[2rem] flex flex-col-reverse lg:flex-row justify-center gap-[6rem]">
          <div className="relative">
            <div className="w-[90%] lg:w-[25rem] mx-auto lg:mx-0 relative z-[2] h-[20rem] lg:h-[25rem] bg-dark-green"></div>
            <Image
              src={"/left-1.png"}
              width={500}
              height={500}
              alt="leaf"
              className="absolute w-[60%] top-5 - lg:-top-0 -left-[5rem] lg:-left-[7rem] "
            />
            <Image
              src={"/vertical.png"}
              width={500}
              height={500}
              alt="leaf"
              className="absolute -top-[8rem] z-[5]"
            />
          </div>
          <div className="text-7xl mt-[1rem] lg:text-[8rem] font-montserrat text-dark-green">
            <h1 className=" p-0">Be </h1>
            <div className="relative lg:w-[40rem]">
              <h1 className="my-5">Gorgeous!</h1>
              <Image
                src={"/circle.svg"}
                width={500}
                height={500}
                alt="leaf"
                className="absolute -top-[1rem] lg:-top-[2rem] -left-[5px] lg:-left-[1rem] z-[5] w-[100%] md:w-[45%] lg:w-[100%] "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-full lg:w-[60%] py-[5rem] px-[2rem] flex flex-col lg:flex-row justify-center gap-[5rem] items-center mb-5 font-dancing bg-dark-green">
          <div className="w-full lg:w-[40%] text-white">
            <h1 className="text-4xl ">Shop More </h1>
            <p className="text-[18px] py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="relative w-[60%]">
            <div className="w-[12rem] h-[12rem] border-[1px] border-white flex justify-center">
              <Image
                src={"/Image-1-min.png"}
                alt="product"
                height={500}
                width={500}
                className="w-[100%]"
              />
              <Image
                src={"/white-leaf.webp"}
                alt="product"
                height={500}
                width={500}
                className="w-[25%] absolute bottom-5 -left-[3rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
