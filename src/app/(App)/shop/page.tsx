import React from "react";
import HeroComp from "../components/HeroComp";
import { CiSearch } from "react-icons/ci";
const Shop = () => {
  return (
    <div>
      <HeroComp title="Shop" />
      <main className="flex flex-col lg:flex-row h-[50vh] lg:py-[10rem] lg:px-[5rem]">
        <aside className="w-[20%] border-2">
          <div className="flex items-center w-full bg-white border-b-2 border-slate-600 pr-2 ">
            <input
              type="text"
              placeholder="Search products"
              className="border-none outline-none w-[85%]"
            />
            <CiSearch className="text-3xl" />
          </div>
          <div>
            <input type="range" name="" id="" />
            <p>Price: $23 - $300</p>
          </div>
        </aside>
        <aside className="w-[80%] border-2 "></aside>
      </main>
    </div>
  );
};

export default Shop;
