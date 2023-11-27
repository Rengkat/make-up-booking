import Image from "next/image";
import React from "react";
import Nav from "./components/Nav";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-lighter-gold">
      <Nav />

      <main>{children}</main>

      <div className="absolute right-5 bottom-5 flex flex-col items-center cursor-pointer z-10">
        <Image
          src={"/back-to-top.png"}
          alt="back to top"
          width={400}
          height={400}
          className="w-[2rem] h-[5rem]"
        />
        <p className=" text-dark-green text-[20px]">Back to Top</p>
      </div>
    </div>
  );
};

export default AppLayout;
