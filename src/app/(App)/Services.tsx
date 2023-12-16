import Image from "next/image";
import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <div className="bg-white py-[5rem] lg:py-[10rem]">
      <div className="flex w-full justify-start px-5 lg:px-0 lg:justify-center text-2xl md:text-4xl lg:text-6xl font-semibold text-dark-green">
        <div className="relative w-[8rem] md:w-[12rem] lg:w-[27%] xl:w-[22%] mb-[2rem] lg:mb-[5rem] ">
          <span>Experience</span>
          <Image
            src={"/circle.svg"}
            width={500}
            height={500}
            alt="leaf"
            className="absolute -top-[0.5rem] lg:-top-[1.5rem] md:-top-[1rem] -left-[5px] lg:-left-[0.5rem] xl:-left-[1rem] z-[5] w-[100%] md:w-[100%] lg:w-[100%] "
          />
        </div>
        <span> Our Services</span>
      </div>
      <div className="lg:h-[100vh] px-5 lg:px-[5rem]">
        <div className="flex flex-col lg:flex-row h-[80%]">
          <aside className="w-full lg:w-[30%]">
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
          <aside className="w-full lg:w-[40%] h-[90vh] lg:h-base flex items-center lg:justify-center">
            <Image
              src={"/vertical.png"}
              width={500}
              height={500}
              alt="leaf"
              className=" -mt-[3rem] w-full"
            />
          </aside>
          <aside className="w-full lg:w-[30%] ">
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
