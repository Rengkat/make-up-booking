import Image from "next/image";
import React from "react";
interface Props {
  image: string;
  heading: string;
  text: string;
}
const Service = ({ image, heading, text }: Props) => {
  return (
    <div className="lg:p-5">
      <Image src={image} width={500} height={500} alt="leaf" className=" w-[5rem] h-[4rem] " />
      <h1 className="text-2xl text-dark-green mt-5">{heading}</h1>
      <p className="text-[18px] text-dark-green my-5">{text}</p>
    </div>
  );
};

export default Service;
