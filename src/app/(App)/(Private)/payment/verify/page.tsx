import React from "react";
import dynamic from "next/dynamic";
const PaymentComp = dynamic(() => import("../PaymentComp"), { ssr: false });

const payment = () => {
  return (
    <div>
      <PaymentComp />
    </div>
  );
};

export default payment;
