import React, { Fragment } from "react";
import HeroComp from "../../../../components/HeroComp";
import Image from "next/image";
import { FaRegTrashCan } from "react-icons/fa6";
import SelectPaymentType from "./SelectPaymentType";
import Details from "./Details";
const items = [
  {
    id: 5,
    image: "2023-11-30T18:42:59.000Z",
    product: "makeup Kit",
    price: "$45",
    action: "View",
    subtotal: 234,
    quantity: 2,
  },
  {
    id: 5,
    image: "2023-11-30T18:42:59.000Z",
    product: "Lib glue",
    price: "$75",
    action: "View",
    subtotal: 234,
    quantity: 2,
  },
];
const Checkout = () => {
  return (
    <div>
      <HeroComp title="Checkout" />
      <section className="flex flex-col lg:flex-row px-[1rem] gap-10 lg:px-[5rem] py-[5rem] lg:py-[8rem]">
        <aside className="w-full lg:w-[65%]">
          <h1 className="text-dark-green font-normal text-xl lg:text-2xl py-5">Billing Details</h1>
          <Details />
        </aside>
        <aside className="w-full lg:w-[30%] bg-white p-5">
          <h1 className="text-dark-green font-normal text-xl lg:text-2xl py-5">Products</h1>
          <div>
            {items.map((item) => {
              return (
                <Fragment>
                  <div className="flex justify-between border-b-2 border-gray-200 py-3 font-semibold">
                    <div className="flex gap-5">
                      <Image
                        src={"/image.png"}
                        alt="product"
                        height={500}
                        width={500}
                        className="w-[4rem] h-[5rem] object-cover bg-[#e2d7bb]"
                      />
                      <div>
                        <p className=" capitalize">{item.product}</p>
                        <p className=" capitalize">QTY: 4</p>
                      </div>
                    </div>
                    <div>{item.price}</div>
                  </div>
                </Fragment>
              );
            })}
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 py-5">
            <h1>Subtotal</h1>
            <h1>$23</h1>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 py-5">
            <h1>Total</h1>
            <h1>$23</h1>
          </div>
          <SelectPaymentType />
        </aside>
      </section>
    </div>
  );
};

export default Checkout;
