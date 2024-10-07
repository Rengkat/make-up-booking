"use client";
import React, { Fragment } from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
import { ProductType } from "../../../../utilities/extras";
interface Props {
  products: ProductType[];
  isLoading: boolean;
}
const Products = ({ products, isLoading }: Props) => {
  const { shopGrid } = useSelector((state: any) => state.app);

  const xlGrid = `xl:grid-cols-${shopGrid}`;

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${xlGrid} gap-x-6 gap-y-[3rem]`}>
      {isLoading ? (
        <div className="w-full text-2xl h-[100vh] text-dark-green font-semibold pt-[2rem]">
          <p>Loading...</p>
        </div>
      ) : (
        products?.map((product: ProductType) => {
          return <Fragment key={product._id}>{<Product product={product} />}</Fragment>;
        })
      )}
    </div>
  );
};

export default Products;
