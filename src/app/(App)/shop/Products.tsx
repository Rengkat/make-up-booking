"use client";
import React, { Fragment } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../../../redux/services/ProductApiSlice";
import { ProductType } from "../../../../utilities/extras";

const Products = () => {
  const { shopGrid } = useSelector((state: any) => state.app);
  const { data, isLoading } = useGetAllProductsQuery(undefined, {
    pollingInterval: 50000,
  });
  const products = data?.products;

  const xlGrid = `xl:grid-cols-${shopGrid}`;
  {
    isLoading && (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  console.log(data);
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${xlGrid} gap-x-6 gap-y-[3rem]`}>
      {products?.map((product: ProductType) => {
        return <Fragment key={product._id}>{<Product product={product} />}</Fragment>;
      })}
    </div>
  );
};

export default Products;
