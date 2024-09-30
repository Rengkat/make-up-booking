import React, { Fragment } from "react";
import HeroComp from "../../../components/HeroComp";
import { CiSearch } from "react-icons/ci";
import { FaFilter } from "react-icons/fa";
import Products from "./Products";
import ShopGrid from "./ShopGrid";
import { getProducts } from "@/API/Data";
import PriceFilter from "./PriceFilter";
const productCategories = ["cream", "hair masks", "makeup", "moisturisers"];
<option value="default">Default Sorting</option>;

const sorting = [
  {
    value: "popularity",
    name: "Sort by Popularity",
  },
  { value: "highToLow", name: "Sort by Price: High to low" },
  { value: "rating", name: "Sort by Rating" },
  { value: "latest", name: "Sort by Latest" },
  { value: "lowToHigh", name: "Sort by Price: Low to high" },
];
const Shop = async () => {
  // const handleSelect = () => {};
  const products = await getProducts();

  return (
    <div>
      <HeroComp title="Shop" />
      <main className="flex flex-col lg:flex-row py-[5rem] lg:py-[10rem] xl:px-[5rem]">
        <aside className="w-[23%] hidden xl:block ">
          <div className="bg-white px-[2rem] py-[2.5rem]">
            <div className="w-full  bg-white border-b-2 border-slate-600 pr-2 ">
              <input
                type="text"
                placeholder="Search products"
                className="border-none outline-none w-full"
              />
            </div>
          </div>
          <PriceFilter />
          <div className="my-[2rem] bg-white px-[2rem] py-[2.5rem]">
            <h1 className="text-2xl text-dark-green mb-4">Product Categories</h1>
            <ul>
              {productCategories.map((cat) => {
                return (
                  <Fragment key={cat}>
                    <li className="mt-3 text-[18px] text-dark-green hover:text-dark-gold cursor-pointer">
                      {cat}(1)
                    </li>
                  </Fragment>
                );
              })}
            </ul>
          </div>
          <div className="my-[2rem] bg-white px-[2rem] py-[2.5rem]">
            <h1 className="text-2xl text-dark-green mb-4">Product Tags</h1>
            <ul>
              {productCategories.map((cat) => {
                return (
                  <Fragment key={cat}>
                    <li className="mt-3 text-[18px] text-dark-green hover:text-dark-gold cursor-pointer">
                      {cat}(1)
                    </li>
                  </Fragment>
                );
              })}
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

                <select
                  // onChange={handleSelect}
                  name="sort"
                  className="border-0 border-b-2 border-slate-400 bg-transparent">
                  <option disabled>Sort by</option>
                  {sorting.map((sort) => {
                    return (
                      <Fragment key={sort.value}>
                        <option value={sort.value}>{sort.name}</option>
                      </Fragment>
                    );
                  })}
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
