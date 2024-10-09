"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { IoMdClose } from "react-icons/io";
import SideBarCartList from "../app/(App)/(Private)/cart/SideBarCartList";
import { useSelector, useDispatch } from "react-redux";
import { openSideCart } from "../../redux/services/AppSlice";
import { useGetUserCartProductsQuery } from "../../redux/services/CartApiSlice";
import { ProductType } from "../../utilities/extras";
const cartItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
interface Product {
  _id: string;
  quantity: number;
  product: ProductType;
  totalAmount: number;
  user: string;
}
const CartModal = () => {
  const { data } = useGetUserCartProductsQuery({});
  // console.log(data?.cart);
  const { isOpenSideCart } = useSelector((store: any) => store.app);
  const dispatch = useDispatch();
  const handleOpenSideCart = () => {
    dispatch(openSideCart());
  };

  return (
    <div
      className={`${
        isOpenSideCart ? "translate-x-0" : "translate-x-full"
      } transition-all duration-500 ease-linear fixed inset-0 z-[5] bg-transparent flex justify-end`}>
      <div className="w-[30rem] bg-white h-full text-black shadow-md">
        <div className="flex items-center justify-between text-2xl p-7 font-montserrat text-dark-green border-b-2 font-normal">
          <div> Shopping Cart ({data?.cart?.length})</div>
          <div onClick={handleOpenSideCart}>
            <IoMdClose className="cursor-pointer" />
          </div>
        </div>

        <div>
          {data?.cart?.length < 1 ? (
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
              <div className="flex justify-center my-[1rem]">
                <button className="py-4 px-10 bg-dark-green text-white hover:bg-dark-gold">
                  <Link href={"/shop"}>Shop Now</Link>
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="p-5">
                <div className="h-[55vh] overflow-auto">
                  {data?.cart.map((item: Product) => {
                    return (
                      <Fragment key={item?._id}>
                        <SideBarCartList product={item} />
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
                    <Link href={"/cart"}>Open cart</Link>
                  </button>
                  <button className="py-4 px-10 bg-dark-gold text-white hover:bg-dark-green">
                    <Link href={"/checkout"}>Proceed to checkout</Link>
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
