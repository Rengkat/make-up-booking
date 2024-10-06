"use client";
import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { ProductType } from "../../../../utilities/extras";
import { useAddToWishlistMutation } from "../../../../redux/services/WishlistApiSlice";
import { handleAddToWishlist } from "./HandleAddToWhislist";
interface Props {
  product: ProductType;
}
const AddToWishlist = ({ product }: Props) => {
  const [addToWishlist, { isLoading }] = useAddToWishlistMutation();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddClick = () => {
    handleAddToWishlist({
      productId: product._id,
      fromDetailPage: false,
      addToWishlist,
      setSuccessMessage,
      setErrorMessage,
    });
  };

  return (
    <aside onClick={handleAddClick} className="link-icons">
      <FaRegHeart className="text-xl cursor-pointer" />
    </aside>
  );
};

export default AddToWishlist;
