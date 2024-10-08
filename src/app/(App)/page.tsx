"use client";
import React, { Fragment } from "react";
import Hero from "../../components/Hero";
import Product from "./shop/Product";
import LookGood from "./lookGood";
import Services from "./Services";
import BestSelling from "./BestSelling";
import NewsLetter from "./NewsLetter";
import { useGetAllProductsQuery } from "../../../redux/services/ProductApiSlice";
import { ProductType } from "../../../utilities/extras";
// const products = [1, 2, 3, 4, 5, 6, 8, 4, 3, 5, 7];
const Home = () => {
  const { data, isLoading } = useGetAllProductsQuery(
    {
      featured: true,
    },
    { pollingInterval: 50000 }
  );

  const products = data?.products || [];
  return (
    <div>
      <Hero />
      <div className=" shadow-lg px-[1rem] lg:px-[5rem] py-[5rem] lg:py-[10rem] bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6  gap-y-[3rem]">
        {products.slice(0, 8).map((product: ProductType) => {
          return (
            <Fragment key={product?._id}>
              <Product product={product} />
            </Fragment>
          );
        })}
      </div>
      <LookGood />
      <Services />
      <BestSelling />
      <NewsLetter />
    </div>
  );
};

export default Home;
