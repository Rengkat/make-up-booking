"use client";
import HeroComp from "../../../../components/HeroComp";
import Image from "next/image";
import { FaRegTrashCan } from "react-icons/fa6";
import SelectPaymentType from "./SelectPaymentType";
import Details from "./Details";
import { useGetUserCartProductsQuery } from "../../../../../redux/services/CartApiSlice";
import { Fragment, useEffect } from "react";
import { formatter } from "../../../../../utilities/extras";
import { useSelector } from "react-redux";

import { useRouter } from "next/navigation";

const Checkout = () => {
  const { shippingFee, fromCart } = useSelector((state: any) => state.app);
  const router = useRouter();
  const { data, isLoading } = useGetUserCartProductsQuery({});
  const totalAmount = data?.cart.reduce((total: number, product: any) => {
    const newTotal = total + product.subTotalAmount;
    return newTotal;
  }, 0);
  useEffect(() => {
    if (!fromCart) {
      router.replace("/cart");
    }
  }, [fromCart]);
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
            {data?.cart?.map((item: any) => {
              return (
                <Fragment>
                  <div className="flex justify-between border-b-2 border-gray-200 py-3 font-semibold">
                    <div className="flex gap-5">
                      <Image
                        src={item?.product?.image}
                        alt="product"
                        height={500}
                        width={500}
                        className="w-[4rem] h-[5rem] object-cover bg-[#e2d7bb]"
                      />
                      <div>
                        <p className=" capitalize">{item?.product?.name}</p>
                        <p className=" capitalize">QTY: {item?.quantity}</p>
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
            <h1>{formatter.format(totalAmount)}</h1>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 py-5">
            <h1>Sipping Fee</h1>
            <h1>{formatter.format(shippingFee)}</h1>
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 py-5">
            <h1>Total</h1>
            <h1>{formatter.format(totalAmount + shippingFee)}</h1>
          </div>
          <SelectPaymentType />
        </aside>
      </section>
    </div>
  );
};

export default Checkout;
