"use client";
import HeroComp from "../../../../components/HeroComp";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import Details from "./Details";
import { useGetUserCartProductsQuery } from "../../../../../redux/services/CartApiSlice";
import { useCreateOrderMutation } from "../../../../../redux/services/OrderApiSlice";
import { formatter } from "../../../../../utilities/extras";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const { shippingFee, fromCart } = useSelector((state: any) => state.app);
  const router = useRouter();
  const { data, isLoading } = useGetUserCartProductsQuery({});
  const [createOrder, { isLoading: isSubmitting }] = useCreateOrderMutation();

  const [agreed, setAgreed] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const totalAmount = data?.cart.reduce((total: number, product: any) => {
    const newTotal = total + product.subTotalAmount + shippingFee;
    return newTotal;
  }, 0);

  useEffect(() => {
    if (!fromCart) {
      router.replace("/cart");
    }
  }, [fromCart]);

  const order = {
    items: data?.cart,
    shippingFee,
    tax: 0,
    address,
    additionalInfo,
  };

  const handleCreateOrder = async () => {
    console.log(order);
    if (!agreed) {
      setMessage({ type: "error", text: "Please agree to the terms and conditions." });
      return;
    }

    if (!address) {
      setMessage({ type: "error", text: "Please select an address for delivery." });
      return;
    }
    try {
      const response = await createOrder(order).unwrap();

      if (response?.status === "success" && response?.authorization_url) {
        setMessage({ type: "success", text: "Order placed successfully!" });

        window.location.href = response.authorization_url;
      } else {
        setMessage({
          type: "error",
          text: "Failed to redirect to payment. Please try again.",
        });
      }
    } catch (error: any) {
      setMessage({
        type: "error",
        text: error?.data?.message || "Failed to place the order. Please try again.",
      });
    }
  };
  // console.log(data);
  return (
    <div>
      <HeroComp title="Checkout" />
      <section className="flex flex-col lg:flex-row px-[1rem] gap-10 lg:px-[5rem] py-[5rem] lg:py-[8rem]">
        <aside className="w-full lg:w-[65%]">
          <h1 className="text-dark-green font-normal text-xl lg:text-2xl py-5">Billing Details</h1>
          <Details onAddressChange={setAddress} onAdditionalInfoChange={setAdditionalInfo} />
        </aside>
        <aside className="w-full lg:w-[30%] bg-white p-5">
          <h1 className="text-dark-green font-normal text-xl lg:text-2xl py-5">Products</h1>
          <div>
            {data?.cart?.map((item: any) => (
              <Fragment key={item.product._id}>
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
                      <p className="capitalize">{item?.product?.name}</p>
                      <p className="capitalize">QTY: {item?.quantity}</p>
                    </div>
                  </div>
                  <div>
                    {formatter.format(item.product.price)} + {formatter.format(shippingFee)}{" "}
                    shipping fee
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="flex justify-between border-b-2 border-gray-200 py-5">
            <h1>Subtotal</h1>
            <h1>{formatter.format(totalAmount)} inc. Shipping fee</h1>
          </div>

          <div className="flex justify-between border-b-2 border-gray-200 py-5">
            <h1>Total</h1>
            <h1>{formatter.format(totalAmount)}</h1>
          </div>
          <p className="mt-5">
            Your personal data will be used to process your order, support your experience
            throughout this website, and for other purposes described in our privacy policy.
          </p>
          <div className="flex items-start my-5 gap-5">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-2"
            />
            <p>I have read and agree to the website terms and conditions *</p>
          </div>
          <button
            onClick={handleCreateOrder}
            disabled={isSubmitting}
            className={`text-white py-4 px-8 text-xl bg-dark-green my-5 ${
              isSubmitting ? "opacity-50" : ""
            }`}>
            {isSubmitting ? "Placing Order..." : "Place Order"}
          </button>
        </aside>
      </section>
      {message && (
        <div
          className={`fixed bottom-5 right-5 p-4 text-white rounded ${
            message.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}>
          {message.text}
        </div>
      )}
    </div>
  );
};

export default Checkout;
