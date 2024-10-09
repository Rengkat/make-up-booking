import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section id="top" className="flex justify-center px-4 py-20 bg-light-green">
        <div className="w-full lg:w-[80%] flex flex-col-reverse lg:flex-row justify-center gap-16 lg:gap-32">
          {/* Left Side: Images */}
          <div className="relative flex items-center">
            <div className="w-[90%] lg:w-[25rem] mx-auto lg:mx-0 relative z-[2] h-[20rem] lg:h-[25rem] bg-dark-green rounded-lg shadow-lg"></div>
            <Image
              src={"/left-1.png"}
              width={500}
              height={500}
              alt="leaf"
              className="absolute w-[60%] top-5 lg:-top-0 -left-[5rem] lg:-left-[7rem] transition-transform duration-300"
            />
            <Image
              src={"/vertical.png"}
              width={500}
              height={500}
              alt="leaf"
              className="absolute -top-32 z-[5] transition-transform duration-300"
            />
          </div>

          {/* Right Side: Text */}
          <div className="text-7xl mt-4 lg:text-[8rem] font-montserrat text-dark-green leading-tight">
            <h1 className="p-0">Be </h1>
            <div className="relative lg:w-[40rem]">
              <h1 className="my-5">Gorgeous!</h1>
              <Image
                src={"/circle.svg"}
                width={500}
                height={500}
                alt="leaf"
                className="absolute -top-[1rem] lg:-top-[2rem] -left-2 lg:-left-1 z-[2] w-[100%] md:w-[45%] lg:w-[100%] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="flex justify-end">
        <div className="w-full lg:w-[60%] py-20 px-4 flex flex-col lg:flex-row justify-center gap-16 items-center mb-5 font-dancing bg-dark-green rounded-lg shadow-lg">
          <div className="w-full lg:w-[40%] text-white text-center lg:text-left">
            <h1 className="text-4xl">Shop More </h1>
            <p className="text-lg py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="relative w-[60%]">
            <div className="w-[12rem] h-[12rem] border-[1px] border-white flex justify-center items-center overflow-hidden rounded-full shadow-md">
              <Image
                src={"/Image-1-min.png"}
                alt="product"
                height={500}
                width={500}
                className="w-full h-full object-cover"
              />
              <Image
                src={"/white-leaf.webp"}
                alt="product"
                height={500}
                width={500}
                className="w-[25%] absolute bottom-5 -left-[3rem] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
