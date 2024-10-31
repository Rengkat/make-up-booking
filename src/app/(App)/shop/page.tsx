"use client";
import React, { useState, useEffect } from "react";
import HeroComp from "../../../components/HeroComp";
import { FaFilter } from "react-icons/fa";
import Products from "./Products";
import ShopGrid from "./ShopGrid";
import PriceFilter from "./PriceFilter";
import { useGetAllProductsQuery } from "../../../../redux/services/ProductApiSlice";

const productCategories = ["cream", "hair masks", "makeup", "moisturisers"];
const sortingOptions = [
  { value: "popularity", name: "Sort by Popularity" },
  { value: "highToLow", name: "Sort by Price: High to low" },
  { value: "rating", name: "Sort by Rating" },
  { value: "latest", name: "Sort by Latest" },
  { value: "lowToHigh", name: "Sort by Price: Low to high" },
];

const Shop = () => {
  const [name, setName] = useState("");
  const [sort, setSort] = useState("default");
  const [page, setPage] = useState(1);
  const [debouncedName, setDebouncedName] = useState(name);
  const [selectedPrice, setSelectedPrice] = useState([0, 10000]);

  const { data, isLoading } = useGetAllProductsQuery(
    {
      name: debouncedName,
      sort,
      page,
      minPrice: selectedPrice[0],
      maxPrice: selectedPrice[1],
    },
    { pollingInterval: 50000 }
  );

  const products = data?.products || [];

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedName(name), 500);
    return () => clearTimeout(timer);
  }, [name]);

  return (
    <div>
      <HeroComp title="Shop" />
      <main className="flex flex-col lg:flex-row py-[5rem] lg:py-[10rem] xl:px-[5rem]">
        <aside className="w-[23%] hidden xl:block">
          <div className="bg-white px-[2rem] py-[2.5rem]">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Search products"
              className="w-full border-b-2 border-slate-600 outline-none"
            />
          </div>
          <PriceFilter onPriceChange={setSelectedPrice} />
          <div className="my-[2rem] bg-white px-[2rem] py-[2.5rem]">
            <h1 className="text-2xl text-dark-green mb-4">Product Categories</h1>
            <ul>
              {productCategories.map((cat) => (
                <li
                  key={cat}
                  className="mt-3 text-[18px] text-dark-green hover:text-dark-gold cursor-pointer">
                  {cat}(1)
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <aside className="w-full xl:w-[77%] p-[1rem] xl:pl-10">
          <div className="flex flex-col md:flex-row items-center justify-between pt-2 pb-[3rem]">
            <p className="text-[19px] text-dark-green py-[2rem] md:py-0">
              Showing {data?.page} of {data?.totalPages} Pages
            </p>
            <div className="flex gap-5 items-center">
              <ShopGrid />
              <div className="flex items-center">
                <aside className="flex items-center justify-center py-[2px] px-5 bg-dark-green text-white xl:hidden">
                  <FaFilter className="text-xl cursor-pointer" />
                </aside>
                <select
                  onChange={(e) => setSort(e.target.value)}
                  name="sort"
                  className="border-0 border-b-2 border-slate-400 bg-transparent"
                  defaultValue="default">
                  <option value="default" disabled>
                    Sort by
                  </option>
                  {sortingOptions.map(({ value, name }) => (
                    <option key={value} value={value}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <Products products={products} isLoading={isLoading} />
          <div className="flex justify-end items-center gap-4">
            <button
              className={`p-2 ${
                page === 1 ? "bg-dark-gold" : "bg-dark-green"
              } rounded shadow cursor-pointer text-white`}
              onClick={() => setPage(page - 1)}
              disabled={page === 1}>
              Prev
            </button>
            <p className="text-xl">{data?.page}</p>
            <button
              className={`p-2 ${
                page === data?.totalPages ? "bg-dark-gold" : "bg-dark-green"
              } rounded shadow cursor-pointer text-white`}
              onClick={() => setPage(page + 1)}
              disabled={page === data?.totalPages}>
              Next
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default Shop;
