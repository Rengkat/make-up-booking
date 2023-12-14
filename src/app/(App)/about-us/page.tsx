import React from "react";
import HeroComp from "../components/HeroComp";
import Image from "next/image";
import Form from "../(Private)/appointment/form";
import { IoLocation } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import CircledWords from "../components/CircledWords";
const About = () => {
  return (
    <div>
      <HeroComp title="About Us" />
      <main className="py-[10rem]">
        <div className=" flex flex-col lg:flex-row lg:gap-5 px-[1rem]">
          <aside className=" w-full lg:w-1/2 lg:px-[3rem]">
            <CircledWords begin="We" main="Welcome" after="The Best In You." />
          </aside>
          <p className="w-full lg:w-1/2 text-slate-500 my-5 text-base lg:text-xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur repudiandae
            reiciendis nulla, ad quibusdam cum dolorum. Doloribus ut adipisci libero voluptatem ab
            soluta
          </p>
        </div>
        <section className="flex flex-col lg:flex-row justify-between items-center gap-5 p-[1rem] lg:px-[5rem] my-[5rem]">
          <aside className="w-full lg:w-1/2 flex justify-start">
            <div>
              <Image src={"/Image-1-min.jpg"} width={500} height={500} alt="image" />
              <div className="py-5">
                <h1 className="text-xl font-montserrat text-dark-green">Alexander Nanmet</h1>
                <p>The Founder</p>
              </div>
            </div>
          </aside>
          <aside className="w-full lg:w-1/2 text-center flex justify-end">
            <div>
              <Image src={"/Image-1-min.jpg"} width={500} height={500} alt="image" />
              <div className="py-5 text-left">
                <p>Our Motto: Lorem ipsum dolor consectetur adipisicing elit.</p>
                <p>Our Values: Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </aside>
        </section>
        <section>
          <aside className="w-full lg:w-1/2 lg:my-[5rem]">
            <div className="w-full lg:w-[70%] text-center">
              <CircledWords begin="Get In" main="Touch" after="With Us" />
            </div>

            <div className="px-[1rem] lg:px-[3rem]">
              <aside className="flex gap-5 mt-5 ">
                <IoLocation className=" bg-dark-gold text-4xl rounded-full text-white p-2" />
                <p>4517 Washington Ave. MCR, Kentucky 39495</p>
              </aside>
              <aside className="flex gap-5 my-5">
                <FaPhone className=" bg-dark-gold text-4xl rounded-full text-white p-2" />
                <p>+2348067581175</p>
              </aside>
            </div>
          </aside>
        </section>
        <section className="contact py-[6rem] ">
          <div className="flex lg:justify-end">
            <Form color="bg-dark-gold" btnColor="bg-dark-green" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
