import Image from "next/image";
import React from "react";
import Nav from "./components/Nav";
import Link from "next/link";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative bg-lighter-gold">
      <Nav />

      <main>{children}</main>

      <Link href="#top">
        <div className="fixed right-5 bottom-5 flex flex-col items-center cursor-pointer z-[3]">
          <Image
            src={"/back-to-top.png"}
            alt="back to top"
            width={400}
            height={400}
            className="w-[2rem] h-[5rem]"
          />
          <p className=" text-dark-green text-[20px]">Back to Top</p>
        </div>
      </Link>
    </div>
  );
};

export default AppLayout;
