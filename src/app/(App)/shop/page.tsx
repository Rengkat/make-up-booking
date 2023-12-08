import React, { Fragment } from "react";
import HeroComp from "../components/HeroComp";
import { CiSearch } from "react-icons/ci";
import { FaList } from "react-icons/fa";
import { IoGridSharp } from "react-icons/io5";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import Product from "./Product";
const products = [1, 2, 3, 4, 5, 6, 8, 4, 3, 5, 7];
const Shop = () => {
  return (
    <div>
      <HeroComp title="Shop" />
      <main className="flex flex-col lg:flex-row lg:py-[10rem] lg:px-[5rem]">
        <aside className="w-[25%]">
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
        <aside className="w-[75%]  ">
          <div className="flex items-center justify-between py-2 px-10">
            <p>Showing 1–6 of 9 results</p>
            <div className="flex gap-5 items-center ">
              <FaList className="text-xl cursor-pointer" />
              <IoGridSharp className="text-xl cursor-pointer" />
              <TfiLayoutGrid3Alt className="text-xl cursor-pointer" />
              <TfiLayoutGrid4Alt className="text-xl cursor-pointer" />
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
          <div className="grid grid-cols-4 ml-10 gap-5">
            {products.map((product) => {
              return (
                <Fragment key={product}>
                  <Product />
                </Fragment>
              );
            })}
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Shop;
