import Image from "next/image";
import React from "react";
import Form from "./form";
interface Props {
  color: string;
  image: string;
  imageDisplay: boolean;
}
const ContactUs = () => {
  return (
    <div className={`m-5 lg:m-[3rem] bg-dark-green flex flex-col lg:flex-row`}>
      <Form color="ext-dark-green" btnColor="bg-dark-gold" />
      <aside className={`text-dark-green w-full lg:w-1/2`}>
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
