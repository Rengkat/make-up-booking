import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { IoMdClose } from "react-icons/io";
import SideBarCartList from "../(Private)/cart/SideBarCartList";
const cartItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const CartModal = () => {
  return (
    <div className="hidden fixed inset-0 z-[5] bg-transparent flex justify-end">
      <div className="w-[30rem] bg-white h-full text-black shadow-md">
        <div className="flex items-center justify-between text-2xl p-7 font-montserrat text-dark-green border-b-2 font-normal">
          <div> Shopping Cart (0)</div>
          <IoMdClose />
        </div>

        <div>
          {cartItems.length < 1 ? (
            <>
              <div className="mt-[5rem] mb-5">
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
              </p>
              <div className="flex justify-center my-[3rem]">
                <button className="py-4 px-10 bg-dark-green text-white hover:bg-dark-gold">
                  <Link href={"/shop"}>Shop Now</Link>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="p-5">
                <div className="h-[55vh] overflow-auto">
                  {cartItems.map((item) => {
                    return (
                      <Fragment key={item}>
                        <SideBarCartList />
                      </Fragment>
                    );
                  })}
                </div>
              </div>
              <div className=" border-t-[1px] border-slate-300 mx-[1rem] py-5">
                <aside className="flex justify-between font-bold text-xl text-dark-green">
                  <h1>Subtotal:</h1>
                  <h1>$1300</h1>
                </aside>
                <div className="flex justify-center gap-5 my-[2rem]">
                  <button className="py-4 px-10 bg-dark-green text-white hover:bg-dark-gold">
                    <Link href={"/shop"}>Shop Now</Link>
                  </button>
                  <button className="py-4 px-10 bg-dark-gold text-white hover:bg-dark-green">
                    <Link href={"/shop"}>Shop Now</Link>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
// sm:w-[80%] md:w-[50%] lg:w-[30%] xl:w-[20%]
