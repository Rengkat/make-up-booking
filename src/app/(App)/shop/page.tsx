import React, { Fragment } from "react";
import HeroComp from "../../../components/HeroComp";
import { CiSearch } from "react-icons/ci";
import { FaFilter, FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import Products from "./Products";
import ShopGrid from "./ShopGrid";

const Shop = () => {
  return (
    <div>
      <HeroComp title="Shop" />
      <main className="flex flex-col lg:flex-row py-[5rem] lg:py-[10rem] xl:px-[5rem]">
        <aside className="w-[23%] hidden xl:block ">
          <div className="bg-white px-[2rem] py-[2.5rem]">
            <div className="flex items-center  bg-white border-b-2 border-slate-600 pr-2 ">
              <input
                type="text"
                placeholder="Search products"
                className="border-none outline-none w-[85%]"
              />
              <CiSearch className="text-3xl" />
            </div>
          </div>
          <div className="my-[2rem] bg-white px-[2rem] py-[2.5rem]">
            <input type="range" name="" id="" className="w-full" />
            <p className="my-2 text-xl font-light">Price: $23 - $300</p>
          </div>
          <div className="my-[2rem] bg-white px-[2rem] py-[2.5rem]">
            <h1 className="text-2xl text-dark-green mb-4">Product Categories</h1>
            <ul>
              <li className="mt-3 text-[18px] text-dark-green hover:text-dark-gold cursor-pointer">
                Creams(1)
              </li>
              <li className="mt-3 text-[18px] text-dark-green hover:text-dark-gold cursor-pointer">
                Hair Masks(3)
              </li>
              <li className="mt-3 text-[18px] text-dark-green hover:text-dark-gold cursor-pointer">
                Makeup(1)
              </li>
              <li className="mt-3 text-[18px] text-dark-green hover:text-dark-gold cursor-pointer">
                Moisturisers(2)
              </li>
            </ul>
          </div>
          <div className="my-[2rem] bg-white px-[2rem] py-[2.5rem]">
            <h1 className="text-2xl text-dark-green mb-4">Product Tags</h1>
            <ul>
              <li className="mt-3 text-[18px] text-dark-green hover:text-dark-gold cursor-pointer">
                Creams(1)
              </li>
              <li className="mt-3 text-[18px] text-dark-green hover:text-dark-gold cursor-pointer">
                Hair Masks(3)
              </li>
              <li className="mt-3 text-[18px] text-dark-green hover:text-dark-gold cursor-pointer">
                Makeup(1)
              </li>
              <li className="mt-3 text-[18px] text-dark-green hover:text-dark-gold cursor-pointer">
                Moisturisers(2)
              </li>
            </ul>
          </div>
        </aside>
        <aside className="w-full xl:w-[77%] p-[1rem] xl:pl-10 ">
          <div className="flex flex-col md:flex-row items-center justify-between pt-2 pb-[3rem]">
            <p className="text-[19px] text-dark-green py-[2rem] md:py-0">
              Showing 1–6 of 9 results
            </p>
            <div className="flex gap-5 items-center ">
              <ShopGrid />
              <div className="flex ">
                <aside className="flex items-center justify-center py-[2px] px-5 bg-dark-green text-white xl:hidden">
                  <FaFilter className="text-xl cursor-pointer" />
                </aside>

                <select name="sort" className="border-0 border-b-2 border-slate-400 bg-transparent">
                  <option disabled>Sort by</option>
                  <option value="default">Default Sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="average">Sort by averaging</option>
                  <option value="latest">Sort by latest</option>
                  <option value="lowToHigh">Sort by Price: Low to high</option>
                  <option value="highToLow">Sort by Price: High to low</option>
                </select>
              </div>
            </div>
          </div>
          <Products />
        </aside>
      </main>
    </div>
  );
};

export default Shop;
