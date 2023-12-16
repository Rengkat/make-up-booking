import Image from "next/image";
import React, { Fragment } from "react";
import Product from "./shop/Product";
const products = [1, 2, 3, 4, 5, 6, 8, 4, 3, 5, 7];

const BestSelling = () => {
  return (
    <div className="bg-white">
      <div className="flex w-full justify-start px-5 lg:px-0 lg:justify-center text-2xl md:text-4xl lg:text-6xl font-semibold text-dark-green">
        <div className="relative w-[5rem] md:w-[12rem] lg:w-[10%] xl:w-[12%] mb-[2rem] lg:mb-[0rem] ">
          <span>Best </span>
          <Image
            src={"/circle.svg"}
            width={500}
            height={500}
            alt="leaf"
            className="absolute top-[0.2rem] lg:-top-[0rem] md:-top-[1rem] -left-[10px] lg:-left-[0.5rem] xl:-left-[1.5rem] z-[5] w-[100%] md:w-[100%] lg:w-[100%] "
          />
        </div>
        <span>Selling Products</span>
      </div>
      <div className="px-[1rem] lg:px-[5rem] py-[2rem] lg:py-[5rem] bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6  gap-y-[3rem]">
        {products.slice(0, 8).map((product) => {
          return (
            <Fragment key={product}>
              <Product />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default BestSelling;
