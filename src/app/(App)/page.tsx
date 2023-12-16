import React, { Fragment } from "react";
import Hero from "./components/Hero";
import Product from "./shop/Product";
import LookGood from "./lookGood";
import Services from "./Services";
import BestSelling from "./BestSelling";
import NewsLetter from "./NewsLetter";
const products = [1, 2, 3, 4, 5, 6, 8, 4, 3, 5, 7];
const Home = () => {
  return (
    <div>
      <Hero />
      <div className="px-[1rem] lg:px-[5rem] py-[5rem] lg:py-[10rem] bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6  gap-y-[3rem]">
        {products.slice(0, 8).map((product) => {
          return (
            <Fragment key={product}>
              <Product />
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
