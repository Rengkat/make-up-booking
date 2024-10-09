"use client";
import Image from "next/image";
import React, { useState } from "react";
import { formatter, ProductType } from "../../../../../utilities/extras";
import { FaRegTrashCan } from "react-icons/fa6";
import { handleRemoveFromToCart } from "./HandleRemoveFromCart";
import { useRemoveFromCartMutation } from "../../../../../redux/services/CartApiSlice";
interface Product {
  _id: string;
  quantity: number;
  product: ProductType;
  totalAmount: number;
  user: string;
}
interface Props {
  product: Product;
}
const SideBarCartList = ({ product }: Props) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [removeProductFromCart, { isLoading: removing }] = useRemoveFromCartMutation();

  const handleRemove = async (productId: string) => {
    handleRemoveFromToCart({
      productId,
      removeProductFromCart,
      setSuccessMessage,
      setErrorMessage,
    });
  };
  const handleUpdateQuantity = async ({
    id,
    quantity,
    action,
  }: {
    id: string;
    quantity: number;
    action: "increment" | "decrement";
  }) => {
    handleUpdateQuantityFun({ id, action, updateQuantity, quantity });
  };
  return (
    <>
      <div className="flex items-start justify-between font-montserrat pr-3 py-[1rem] border-b-[1px] border-gray-300">
        <div className="flex gap-5">
          <Image
            src={product?.product?.image}
            alt="product"
            height={500}
            width={500}
            className="w-[6rem] h-[7rem] object-cover bg-[#e2d7bb]"
          />
          <aside className="flex flex-col gap-y-2">
            <h1>{product?.product?.name}</h1>
            <h3>{formatter.format(product?.product?.price)}</h3>
            <div className="w-[60%] flex justify-between items-center border-[1px] border-dark-gold py-2 px-3">
              <button
                onClick={() =>
                  handleUpdateQuantity({
                    id: product?._id,
                    quantity: product?.quantity,
                    action: "decrement",
                  })
                }
                className="text-xl">
                -
              </button>
              <h1>{product?.totalAmount}</h1>
              <button
                onClick={() =>
                  handleUpdateQuantity({
                    id: product?._id,
                    quantity: product?.quantity,
                    action: "increment",
                  })
                }
                className="text-xl">
                +
              </button>
            </div>
          </aside>
        </div>
        <div
          onClick={() => handleRemove(product?._id)}
          className=" text-gray-500 text-xl cursor-pointer">
          <FaRegTrashCan />
        </div>
      </div>
    </>
  );
};

export default SideBarCartList;
