import React from "react";

const Details = () => {
  return (
    <div>
      <input className="checkout-input" type="text" value={"Alexander"} />
      <input className="checkout-input" type="text" value={"Rengkat"} />
      <input
        className="checkout-input"
        type="text"
        value={"2, COCIN Church Sabon Barki, Gindiri"}
      />
      <input className="checkout-input" type="text" value={"Nigeria"} />
      <input className="checkout-input" type="text" value={"Plateau"} />
      <input className="checkout-input" type="text" value={"Mangu"} />
      <input className="checkout-input" type="text" value={"+2348067581175"} />
      <input className="checkout-input" type="email" value={"rengkatalexander@gmail.com"} />
      <h2 className="text-dark-green font-normal text-xl lg:text-2xl py-5">
        Additional Information
      </h2>
      <textarea
        className="checkout-input h-[20vh]"
        name=""
        id=""
        placeholder="Please add any information for your delivery"></textarea>
    </div>
  );
};

export default Details;
