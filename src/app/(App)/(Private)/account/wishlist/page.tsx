"use client";
import React, { Fragment } from "react";
import {
  useGetUserWishlistProductsQuery,
  useRemoveFromWishlistMutation,
} from "../../../../../../redux/services/WishlistApiSlice";
import { formatter, ProductType } from "../../../../../../utilities/extras";
import Image from "next/image";
import Link from "next/link";
import { FaRegTrashCan } from "react-icons/fa6";

const title = ["S/No", "Image", "Name", "price", "action", ""];

const Wishlist = () => {
  const { data, isLoading } = useGetUserWishlistProductsQuery({});
  const [removeFromWishlist, {}] = useRemoveFromWishlistMutation();
  const wishlists = data?.wishlist;
  const handleRemoveFromWishlist = async (id: string) => {
    const res = await removeFromWishlist(id).unwrap();
    console.log(res);
  };
  return (
    <>
      {isLoading ? (
        <div className="flex h-[60vh] w-full justify-center items-center font-semibold text-dark-green">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {wishlists.length < 1 ? (
            <div className="flex justify-center">
              <p className="bg-dark-green py-2 px-5 text-white">
                There is not product in your wishlist
              </p>
            </div>
          ) : (
            <div className="bg-white p-2 lg:py-3  lg:px-[2rem] text-xl text-slate-600 mb-[5rem] shadow">
              <div className={`wishlist-grid bg-dark-gold text-white capitalize p-2`}>
                {title.map((head) => (
                  <div key={head}>{head}</div>
                ))}
              </div>
              <div className="text-sm lg:text-base mt-[1rem] capitalize">
                {wishlists?.map((product: any, i: number) => {
                  return (
                    <Fragment key={product._id}>
                      <div className="wishlist-grid py-2">
                        <div className="pl-5">{i + 1}</div>
                        <div>
                          <Image
                            src={product?.product?.image}
                            alt={product?.product?.name}
                            height={500}
                            width={500}
                            className=" w-12"
                          />
                        </div>
                        <div>{product?.product?.name}</div>
                        <div>{formatter.format(product?.product?.price)}</div>
                        <div>
                          <Link
                            href={`/shop/${product?.product?._id}`}
                            className="py-2 px-5 bg-dark-green hover:bg-dark-gold text-white">
                            View
                          </Link>
                        </div>
                        <div
                          onClick={() => handleRemoveFromWishlist(product?._id)}
                          className=" text-gray-500 text-xl cursor-pointer">
                          <FaRegTrashCan className="-ml-5" />
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Wishlist;
