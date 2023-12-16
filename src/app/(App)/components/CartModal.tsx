import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
const CartModal = () => {
  return (
    <div className=" fixed inset-0 z-[5] bg-transparent flex justify-end">
      <div className="w-[30rem] bg-white h-full text-black shadow-md">
        <div className="flex items-center justify-between text-2xl p-7 font-montserrat text-dark-green border-b-2 font-normal">
          <div> Shopping Cart (0)</div>
          <IoMdClose />
        </div>
        <div>
          {/* <div className="mt-[5rem] mb-5">
            <Image
              src={"/cart.svg"}
              alt="cart"
              height={500}
              width={500}
              className="w-[95%] mx-auto"
            />
          </div>
          <p className="w-[90%] lg:w-[70%] mx-auto text-center px-[5rem] text-[19px]">
            Your Cart is empty. Add few items.
          </p> */}
          {/* <div className="flex justify-center my-[3rem]">
            <button className="py-4 px-10 bg-dark-green text-white hover:bg-dark-gold">
              <Link href={"/shop"}>Shop Now</Link>
            </button>
          </div> */}
          <div className="flex justify-center gap-5 my-[3rem] border-t-2 border-slate-300 mx-[1rem]">
            <button className="py-4 px-10 bg-dark-green text-white hover:bg-dark-gold">
              <Link href={"/shop"}>Shop Now</Link>
            </button>
            <button className="py-4 px-10 bg-dark-gold text-white hover:bg-dark-green">
              <Link href={"/shop"}>Shop Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
// sm:w-[80%] md:w-[50%] lg:w-[30%] xl:w-[20%]
