"use client";
import { BsCheck2Circle } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { Fragment, useState } from "react";
import { useGetSingleProductsQuery } from "../../../../../redux/services/ProductApiSlice";
import { formatter } from "../../../../../utilities/extras";
import { useAddToCartMutation } from "../../../../../redux/services/CartApiSlice";
import { handleAddToCart } from "../HandleAddToCart";
import Image from "next/image";
import { handleAddToWishlist } from "../HandleAddToWhislist";
import { useAddToWishlistMutation } from "../../../../../redux/services/WishlistApiSlice";
import ProductReview from "./ProductReview";

interface Props {
  params: { productId: string };
}

const Product = ({ params }: Props) => {
  const { productId } = params;
  const { data, isLoading } = useGetSingleProductsQuery(productId);
  const [addToWishlist, { isLoading: adding }] = useAddToWishlistMutation();

  const product = data?.product;
  console.log(product);
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
        <div className="flex flex-col lg:flex-row gap-10 p-5 lg:p-10 bg-white shadow-md rounded-lg">
          {/* Product Image */}
          <aside className="w-full lg:w-[45%]">
            <Image
              src={product?.image}
              alt="image"
              height={500}
              width={500}
              className="w-full object-cover rounded-lg shadow"
            />
          </aside>

          {/* Product Details */}
          <aside className="w-full lg:w-[55%] p-5">
            <h1 className=" text-xl lg:text-5xl font-semibold ">{product?.name}</h1>
            <h3 className="my-5 font-semibold text-2xl text-dark-green">
              {formatter.format(product?.price)}
            </h3>
            <div className="flex items-center gap-3 my-3 text-gray-700">
              <BsCheck2Circle />
              <span>{product?.inventory > 1 ? "IN STOCK" : "OUT OF STOCK"}</span>
            </div>
            <p className="text-lg text-gray-600 mb-5">{product?.description}</p>
            <button
              onClick={handleAddClick}
              className="w-full bg-dark-green shadow py-3 px-5 text-white my-5 rounded-lg hover:bg-dark-gold transition duration-200">
              ADD TO CART
            </button>
            <div
              onClick={handleAddToWishlistClick}
              className="flex items-center cursor-pointer gap-1 my-5 text-dark-green hover:text-dark-gold transition duration-200">
              <CiHeart fontSize={25} />
              <span>ADD TO WISHLIST</span>
            </div>
            <div className="flex items-center gap-1 my-1">
              <label className="font-semibold">SKU:</label>
              <p>1234213</p>
            </div>
            <div className="flex items-center gap-1">
              <label className="font-semibold">Categories:</label>
              <p>{product?.category?.name}</p>
            </div>
          </aside>
        </div>
      )}

      {/* Error Message */}
      {!isLoading && errorMessage && (
        <div className="text-xl flex justify-center">
          <p className="bg-red-400 w-1/2 py-3 px-5 text-center text-red-800 font-semibold rounded-lg">
            {errorMessage}
          </p>
        </div>
      )}

      {/* Review Section */}
      <div className="mt-10 p-5 bg-light-gray rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-5">User Reviews</h2>
        <div>
          {product?.reviews?.map((review: any) => {
            return (
              <Fragment key={review._id}>
                <ProductReview review={review} />
              </Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
