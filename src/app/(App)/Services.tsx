import Image from "next/image";
import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <div className="bg-white py-[5rem] lg:py-[10rem]">
      <div className="flex w-full justify-start px-5 lg:px-0 lg:justify-center text-xl md:text-4xl lg:text-6xl font-semibold text-dark-green">
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
      <div className="h-[100vh] px-5 lg:px-[5rem]">
        <div className="flex flex-col lg:flex-row h-[80%]">
          <aside className="w-full lg:w-[30%] border-2 border-green-800">
            <div>
              <Service
                image="/Icon-6.webp"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi sed perspiciatis
                ad quis veniam nemo. Libero maiores suscipit sunt omnis!."
                heading="Doctor Tested"
              />
            </div>
            <div>
              <Service
                image="/Group.webp"
                heading="100% Organic"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi sed perspiciatis
                ad quis veniam nemo. Libero maiores suscipit sunt omnis!."
              />
            </div>
          </aside>
          <aside className="w-full lg:w-[40%] h-[180vh] lg:h-base flex items-center justify-start lg:justify-center border-2 border-red-800">
            <div className="relative w-full lg:w-[80%] mx-auto border-[3px] h-[70%] border-dark-gold">
              <Image
                src={"/left-1.png"}
                width={500}
                height={500}
                alt="leaf"
                className="absolute top-0 left-0 w-full"
              />
              <Image
                src={"/vertical.png"}
                width={500}
                height={500}
                alt="leaf"
                className="absolute -top-[8rem] w-[150%]"
              />
            </div>
          </aside>
          <aside className="w-full lg:w-[30%] border-2 border-purple-800">
            <div>
              <Service
                image="/Icon-1-1.webp"
                heading="Cruelty Free"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi sed perspiciatis
                ad quis veniam nemo. Libero maiores suscipit sunt omnis!."
              />
            </div>
            <div>
              <Service
                image="/Icon-3.webp"
                heading="Eco Friendly"
                text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi sed perspiciatis
                ad quis veniam nemo. Libero maiores suscipit sunt omnis!."
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Services;
