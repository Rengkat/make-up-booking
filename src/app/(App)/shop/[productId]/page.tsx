"use client";
import { BsCheck2Circle } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { useState } from "react";
import { useGetSingleProductsQuery } from "../../../../../redux/services/ProductApiSlice";
import { formatter } from "../../../../../utilities/extras";
import { useAddToCartMutation } from "../../../../../redux/services/CartApiSlice";
import { handleAddToCart } from "../HandleAddToCart";
import Image from "next/image";
import { handleAddToWishlist } from "../HandleAddToWhislist";
import { useAddToWishlistMutation } from "../../../../../redux/services/WishlistApiSlice";

interface Props {
  params: { productId: string };
}

const Product = ({ params }: Props) => {
  const { productId } = params;

  const { data, isLoading } = useGetSingleProductsQuery(productId);
  const [addToWishlist, { isLoading: adding }] = useAddToWishlistMutation();

  const product = data?.product;
  const [addToCart] = useAddToCartMutation();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddClick = () => {
    handleAddToCart({
      productId,
      fromDetailPage: true,
      addToCart,
      setSuccessMessage,
      setErrorMessage,
    });
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  };
  const handleAddToWishlistClick = () => {
    handleAddToWishlist({
      productId,
      fromDetailPage: true,
      addToWishlist,
      setSuccessMessage,
      setErrorMessage,
    });
    setTimeout(() => {
      setErrorMessage("");
    }, 5000);
  };

  return (
    <>
      {isLoading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <p className="font-bold text-xl">Loading...</p>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="w-full lg:w-[45%]">
            <Image
              src={product?.image}
              alt="image"
              height={500}
              width={500}
              className="w-full object-cover"
            />
          </aside>
          <aside className="w-full lg:w-[55%] p-5">
            <h1 className="text-5xl font-thin">{product?.name}</h1>
            <h3 className="my-5 font-semibold text-2xl">{formatter.format(product?.price)}</h3>
            <div className="flex items-center gap-3 my-3">
              <BsCheck2Circle />
              <span>{product?.inventory > 1 ? "IN STOCK" : "OUT OF STOCK"}</span>
            </div>
            <p className="text-[1.2rem]">{product?.description}</p>
            <button
              onClick={handleAddClick}
              className="w-full bg-dark-green shadow py-3 px-5 text-white my-5 hover:bg-dark-gold">
              ADD TO CART
            </button>
            <div onClick={handleAddToWishlistClick} className="flex items-center gap-1 my-5">
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
      )}
      {!isLoading && errorMessage && (
        <div className=" text-xl flex justify-center">
          <p className="bg-red-400 w-1/2 py-3 px-5 text-center text-red-800 font-semibold">
            {errorMessage}
          </p>
        </div>
      )}
    </>
  );
};

export default Product;
