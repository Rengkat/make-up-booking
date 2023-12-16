import Image from "next/image";
import React from "react";

const SideBarCartList = () => {
  return (
    <>
      <div className="flex items-start justify-between font-montserrat pr-3 py-[1rem] border-b-[1px] border-gray-300">
        <div className="flex gap-5">
          <Image
            src={"/image.png"}
            alt="product"
            height={500}
            width={500}
            className="w-[6rem] h-[7rem] object-cover bg-[#e2d7bb]"
          />
          <aside className="flex flex-col gap-y-2">
            <h1>Glow DayCream</h1>
            <h3>$175</h3>
            <div className="flex justify-between items-center border-[1px] border-dark-gold py-2 px-3">
              <button className="text-xl">-</button>
              <h1>2</h1>
              <button className="text-xl">+</button>
            </div>
          </aside>
        </div>
        <button>Remove</button>
      </div>
    </>
  );
};

export default SideBarCartList;
