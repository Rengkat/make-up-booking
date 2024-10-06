import { BsCheck2Circle } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import React from "react";

const Product = ({ params }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      <aside className="w-full lg:w-[45%]">
        <Image
          src="/vaseline-oil.webp"
          alt="image"
          height={500}
          width={500}
          className="w-full object-cover"
        />
      </aside>
      <aside className="w-full lg:w-[55%] p-5">
        <h1 className="text-5xl font-thin">Vaseline Vitamin B3 Body Oil 200ml</h1>
        <h3 className="my-5 font-semibold text-2xl">N11,000</h3>
        <div className="flex items-center gap-3 my-3">
          <BsCheck2Circle />
          <span>IN STOCK</span>
        </div>
        <p className="text-[1.2rem]">
          Elevate your skincare routine with Vaseline Vitamin B3 Body Oil, designed to give you
          moisturized, healthy-looking skin with a natural, radiant glow. Its unique formula
          improves skin texture, leaving it soft, smooth, and beautifully radiant. This body oil
          locks in moisture to prevent dryness and maintains your skin’s natural moisture balance.
          With quick absorption, it hydrates your skin without feeling heavy, making it perfect for
          daily use post-shower or whenever your skin needs a boost of hydration.
        </p>
        <button className="w-full bg-dark-green shadow py-3 px-5 text-white my-5 hover:bg-dark-gold">
          ADD TO CART
        </button>
        <div className="flex items-center gap-1 my-5">
          <CiHeart fontSize={25} />
          <span>ADD TO WISHLIST</span>
        </div>

        <div className="flex items-center gap-1 my-1">
          <label>SKU:</label>
          <p>1234213</p>
        </div>
        <div className="flex items-center gap-1">
          <label>Categories:</label>
          <p>Skincare</p>
        </div>
      </aside>
    </div>
  );
};

export default Product;
