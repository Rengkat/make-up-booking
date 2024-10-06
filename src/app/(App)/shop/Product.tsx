"use client";
import Image from "next/image";
import { FaRegHeart, FaShoppingCart, FaUserTie } from "react-icons/fa";
import { MdOutlineRemoveRedEye, MdOutlineStarOutline, MdStarRate } from "react-icons/md";
import { formatter, ProductType } from "../../../../utilities/extras";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import AddToCart from "./AddToCart";
import AddToWishlist from "./AddToWishlist";
import ViewDetailProduct from "./ViewDetailProduct";
interface Props {
  product: ProductType;
}
const Product = ({ product }: Props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
      className="mt-[1rem]">
      <div className=" bg-[#e2d7bb] cursor-pointer relative overflow-hidden">
        <Image
          src={product?.image}
          alt={product?.name}
          height={500}
          width={500}
          className="w-full"
        />
        <div
          className={`${
            isHover ? "bottom-16" : "-bottom-16"
          } absolute w-full transition-all ease-linear duration-300 py-2 px-2`}>
          <div className="w-full flex justify-between">
            <AddToCart product={product} />
            <ViewDetailProduct productId={product?._id} />
            <AddToWishlist product={product} />
          </div>
        </div>
      </div>
      <div className=" p-5">
        <h1 className="text-center text-xl font-montserrat text-dark-green">{product?.name}</h1>
        <h3 className="text-dark-gold text-2xl text-center py-4 font-dancing">
          {formatter.format(product?.price)}
        </h3>
        <div className="flex justify-center gap-5">
          <Rating
            initialValue={product?.averageRating}
            readonly={true}
            size={25}
            allowFraction={true}
            fillColor="#074456"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
