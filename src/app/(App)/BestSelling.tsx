"use client";
import Image from "next/image";
import React, { Fragment } from "react";
import Product from "./shop/Product";
import { ProductType } from "../../../utilities/extras";
import { useGetAllFeaturedOrBestSellingProductsQuery } from "../../../redux/services/ProductApiSlice";

const BestSelling = () => {
  const { data, isLoading } = useGetAllFeaturedOrBestSellingProductsQuery(
    {
      bestSelling: true,
    },
    { pollingInterval: 50000 }
  );
  const products = data?.products || [];

  return (
    <div className="bg-white">
      <header className="flex flex-col items-center mb-8">
        <div className="relative w-[5rem] md:w-[12rem] lg:w-[10%] xl:w-[12%] mb-[1rem]">
          <span className="text-2xl md:text-4xl lg:text-6xl font-semibold text-dark-green">
            Best{" "}
          </span>
        </div>
        <span className="text-2xl md:text-4xl lg:text-6xl font-semibold text-dark-green">
          Selling Products
        </span>
      </header>
      <div className="px-[1rem] lg:px-[5rem] py-[2rem] lg:py-[5rem] bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-[3rem]">
        {isLoading ? (
          <div className="w-full flex justify-center h-[50vh] items-center">
            <p className="font-semibold text-xl text-gray-700">Loading...</p>
          </div>
        ) : (
          products.slice(0, 8).map((product: ProductType) => (
            <Fragment key={product?._id}>
              <Product product={product} />
            </Fragment>
          ))
        )}
      </div>
    </div>
  );
};

export default BestSelling;
