import React, { Fragment } from "react";
import HeroComp from "../../components/HeroComp";
import Image from "next/image";
import { FaRegTrashCan } from "react-icons/fa6";
const title = ["product", "price", "quantity", "subtotal", ""];

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
const Cart = () => {
  return (
    <>
      <HeroComp title="Cart" />
      <div className="p-[1rem] lg:p-[5rem]">
        <div className="flex flex-col lg:flex-row gap-[2rem]">
          <aside className="w-full lg:w-[70%]">
            <div className={`cart-grid bg-dark-gold text-white capitalize p-4`}>
              {title.map((head) => (
                <div key={head} className=" capitalize lg:text-xl">
                  {head}
                </div>
              ))}
            </div>
            <div>
              {items.map((item) => {
                return (
                  <Fragment>
                    <div className="cart-grid border-b-2 border-gray-200 py-3">
                      <div className="flex gap-5">
                        <Image
                          src={"/image.png"}
                          alt="product"
                          height={500}
                          width={500}
                          className="w-[4rem] h-[5rem] object-cover bg-[#e2d7bb]"
                        />
                        <p className=" capitalize">{item.product}</p>
                      </div>
                      <div>{item.price}</div>
                      <div>
                        <div className=" w-[70%] flex justify-between items-center border-[1px] border-dark-gold py-2 px-3">
                          <button className="text-xl">-</button>
                          <h1>2</h1>
                          <button className="text-xl">+</button>
                        </div>
                      </div>
                      <div>${item.subtotal}</div>
                      <div className=" text-gray-500 text-xl">
                        <FaRegTrashCan />
                      </div>
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </aside>
          <aside className="w-full  lg:w-[30%]">
            <div className="bg-white">
              <div className={` bg-dark-gold text-white text-xl capitalize p-4`}>Cart totals</div>
              <div className="flex flex-col gap-y-5 p-5 text-xl">
                <div className="flex justify-between ">
                  <h1>Subtotal</h1>
                  <h1>$2300</h1>
                </div>
                <div className="flex justify-between">
                  <h1>Total</h1>
                  <h1>$2300</h1>
                </div>
                <button className="py-4 px-8 bg-dark-green text-white">Proceed to checkout</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Cart;
