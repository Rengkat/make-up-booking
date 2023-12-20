"use client";
import React, { Fragment } from "react";
const paymentMethods = [
  {
    label: " Direct bank transfer",
    value: "bankTransfer",
    description:
      "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account",
  },
  {
    label: " Online payment",
    value: "onlinePayment",
    description: "Pay through Paystack",
  },
  {
    label: " Cash on delivery",
    value: "cashOnDelivery",
    description: "Pay with cash upon delivery.",
  },
];
const SelectPaymentType = () => {
  const handleChange = () => {
    console.log("first");
  };
  return (
    <div className="bg-white my-5">
      <div className="my-5">
        {paymentMethods.map((method) => {
          return (
            <Fragment key={method.label}>
              <div>
                <div className="flex items-center gap-5 py-2">
                  <input type="radio" onChange={handleChange} name="" id="" value={method.value} />
                  <span className=" capitalize">{method.label}</span>
                </div>
                {/* <p className=" bg-lighter-gold p-3">{method.description}</p> */}
              </div>
            </Fragment>
          );
        })}
      </div>
      <p>
        Your personal data will be used to process your order, support your experience throughout
        this website, and for other purposes described in our privacy policy.
      </p>
      <div className="flex items-start my-5 gap-5">
        <input type="checkbox" name="" id="" className="mt-2" />
        <p>I have read and agree to the website terms and conditions *</p>
      </div>
      <button className="text-white py-4 px-8 text-xl bg-dark-green my-5">Place Order</button>
    </div>
  );
};

export default SelectPaymentType;
