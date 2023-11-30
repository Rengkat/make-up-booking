import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="m-5 lg:m-[3rem] bg-dark-green flex flex-col lg:flex-row">
      <form className="w-full lg:w-1/2 p-[3rem]">
        <h1 className="text-white text-4xl">Contact Us</h1>
        <input className="contactUs" type="text py-4 px-8" placeholder="Name" />
        <input
          className="contactUs"
          type="email py-4 px-8"
          name="email"
          id="email"
          placeholder="Email"
        />
        <input className="contactUs" type="text py-4 px-8" placeholder="Phone" />
        <button className="py-4 px-8 bg-dark-gold text-white my-5">Submit</button>
      </form>
      <aside className="w-full lg:w-1/2">
        <Image
          src={"/5-min.jpg"}
          width={500}
          height={500}
          alt="Image"
          className="w-full h-full object-cover"
        />
      </aside>
    </div>
  );
};

export default ContactUs;
