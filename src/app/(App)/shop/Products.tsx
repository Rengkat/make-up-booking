"use client";
import React, { Fragment } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
const products = [1, 2, 3, 4, 5, 6, 8, 4, 3, 5, 7];

const Products = () => {
  const { shopGrid } = useSelector((state: any) => state);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${shopGrid} gap-x-6 gap-y-[3rem]`}>
      {products.map((product) => {
        return (
          <Fragment key={product}>
            <Product />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Products;
