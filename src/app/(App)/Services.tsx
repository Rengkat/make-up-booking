import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="bg-white py-[5rem] lg:py-[10rem]">
      <div className="flex w-full justify-center text-xl md:text-4xl lg:text-6xl font-semibold text-dark-green">
        <div className="relative w-[6.5rem] md:w-[12rem] lg:w-[27%] xl:w-[22%] mb-[2rem] lg:mb-[5rem] ">
          <span>Experience</span>
          <Image
            src={"/circle.svg"}
            width={500}
            height={500}
            alt="leaf"
            className="absolute -top-[0rem] lg:-top-[1.5rem] md:-top-[1rem] -left-[5px] lg:-left-[0.5rem] xl:-left-[1rem] z-[5] w-[100%] md:w-[100%] lg:w-[100%] "
          />
        </div>
        <span> Our Services</span>
      </div>
      <div className="h-[100vh] px-[5rem]">
        <div className="flex h-[80%]">
          <aside className="w-[30%] border-2 border-green-800">
            <div>
              <Image
                src={"/circle.svg"}
                width={500}
                height={500}
                alt="leaf"
                className="absolute -top-[0rem] lg:-top-[1.5rem] md:-top-[1rem] -left-[5px] lg:-left-[0.5rem] xl:-left-[1rem] z-[5] w-[100%] md:w-[100%] lg:w-[100%] "
              />
              <h1>Doctor Tested</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi sed perspiciatis
                ad quis veniam nemo. Libero maiores suscipit sunt omnis!.
              </p>
            </div>
            <div></div>
          </aside>
          <aside className="w-[40%] border-2 border-red-800">
            <div className="relative">
              <Image
                src={"/left-1.png"}
                width={500}
                height={500}
                alt="leaf"
                className="absolute top-0 w-full"
              />
              <Image
                src={"/vertical.png"}
                width={500}
                height={500}
                alt="leaf"
                className="absolute top-0 w-full"
              />
            </div>
          </aside>
          <aside className="w-[30%] border-2 border-purple-800"></aside>
        </div>
      </div>
    </div>
  );
};

export default Services;
