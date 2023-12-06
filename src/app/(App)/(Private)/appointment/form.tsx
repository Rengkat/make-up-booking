import React from "react";

const Form = ({ color, btnColor }: { color: string; btnColor: string }) => {
  return (
    <form className={`${color} w-full lg:w-1/2 p-[3rem]`}>
      <h1 className="text-white text-4xl">Contact Us</h1>
      <input className="contactUs" type="text py-4 px-8" placeholder="Name" />
      <input
        className="contactUs"
        type="email py-4 px-8"
        name="email"
        id="email"
        placeholder="Email"
      />
      <input className="contactUs" type="text py-4 px-8" placeholder="Phone" />
      <button className={`py-4 px-8 ${btnColor} text-white my-5`}>Submit</button>
    </form>
  );
};

export default Form;
