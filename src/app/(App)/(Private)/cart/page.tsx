"use client";
import React, { Fragment, useState } from "react";
import HeroComp from "../../../../components/HeroComp";
import Image from "next/image";
import { FaRegTrashCan } from "react-icons/fa6";
import {
  useGetUserCartProductsQuery,
  useRemoveFromCartMutation,
  useUpdateCartProductMutation,
} from "../../../../../redux/services/CartApiSlice";
import { formatter, ProductType } from "../../../../../utilities/extras";
import { handleRemoveFromToCart } from "./HandleRemoveFromCart";
import { handleUpdateQuantityFun } from "./HandleUpdateQuantity";
import { useDispatch, useSelector } from "react-redux";
import { proceedFromCart } from "../../../../../redux/services/AppSlice";
import { useRouter } from "next/navigation";
const title = ["product", "price", "quantity", "subtotal", ""];
// interface Cart {
//   products: ProductType[];
// }
const Cart = () => {
  const { fromCart } = useSelector((state: any) => state.app);
  const dispatch = useDispatch();
  const router = useRouter();
  // console.log(shippingFee, tax);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { data, isLoading } = useGetUserCartProductsQuery({});
  const [removeProductFromCart, { isLoading: removing }] = useRemoveFromCartMutation();
  const [updateQuantity, {}] = useUpdateCartProductMutation();
  // console.log(data);

  const handleRemove = async (productId: string) => {
    // const res = await removeProductFromCart(productId);
    handleRemoveFromToCart({
      productId,
      removeProductFromCart,
      setErrorMessage,
      setSuccessMessage,
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
  const totalAmount = data?.cart.reduce((total: number, product: any) => {
    const newTotal = total + product.subTotalAmount;
    return newTotal;
  }, 0);
  const onHandleProceedToCheckout = () => {
    dispatch(proceedFromCart(true));
    router.push("/checkout");
  };
  return (
    <>
      <HeroComp title="Cart" />
      <div className="p-[1rem] lg:p-[5rem]">
        {isLoading ? (
          <div className="flex h-[90vh] w-full justify-center items-center font-semibold text-dark-green">
            <p>Loading...</p>
          </div>
        ) : (
          <>
            {data?.cart?.length < 1 ? (
              <div className="h-[90vh] flex justify-center">
                <div className="mt-10">
                  <p className="bg-dark-green py-3 px-5 text-white">
                    There is not product in your cart
                  </p>
                </div>
              </div>
            ) : (
              <>
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
                      {data?.cart?.map((item: any) => {
                        return (
                          <Fragment key={item?._id}>
                            <div className="cart-grid border-b-2 border-gray-200 py-3">
                              <div className="flex gap-5">
                                <Image
                                  src={item?.product?.image}
                                  alt="product"
                                  height={500}
                                  width={500}
                                  className="w-[4rem] h-[5rem] object-cover bg-[#e2d7bb]"
                                />
                                <p className=" capitalize">{item?.product?.name}</p>
                              </div>
                              <div>{formatter.format(item?.product?.price)}</div>
                              <div>
                                <div className=" w-[70%] flex justify-between items-center border-[1px] border-dark-gold py-2 px-3">
                                  <button
                                    onClick={() =>
                                      handleUpdateQuantity({
                                        id: item?._id,
                                        quantity: item?.quantity,
                                        action: "decrement",
                                      })
                                    }
                                    className="text-xl">
                                    -
                                  </button>
                                  <h1>{item?.quantity}</h1>
                                  <button
                                    onClick={() =>
                                      handleUpdateQuantity({
                                        id: item?._id,
                                        quantity: item?.quantity,
                                        action: "increment",
                                      })
                                    }
                                    className="text-xl">
                                    +
                                  </button>
                                </div>
                              </div>
                              <div>{formatter.format(item?.subTotalAmount)}</div>
                              <div
                                onClick={() => handleRemove(item?._id)}
                                className=" text-gray-500 text-xl cursor-pointer">
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
                      <div className={` bg-dark-gold text-white text-xl capitalize p-4`}>
                        Cart totals
                      </div>
                      <div className="flex flex-col gap-y-5 p-5 text-xl">
                        <div className="flex justify-between ">
                          <h1>Total Amount</h1>
                          <h1>{formatter.format(totalAmount)}</h1>
                        </div>

                        <button
                          onClick={onHandleProceedToCheckout}
                          className="py-4 px-8 bg-dark-green text-white">
                          Proceed to checkout
                        </button>
                      </div>
                    </div>
                  </aside>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
