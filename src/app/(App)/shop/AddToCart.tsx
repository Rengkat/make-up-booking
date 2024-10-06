"use client";
import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { ProductType } from "../../../../utilities/extras";
import { useAddToCartMutation } from "../../../../redux/services/CartApiSlice";
interface Props {
  product: ProductType;
}
const AddToCart = ({ product }: Props) => {
  const [addToCart, { isLoading }] = useAddToCartMutation();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleAddToCart = async () => {
    try {
      const res = await addToCart({ productId: product._id, fromDetailPage: false }).unwrap();

      if (res?.message) {
        setSuccessMessage(res.message);
        setErrorMessage("");
      }
    } catch (error: any) {
      setErrorMessage(error?.data?.message || "An error occurred while adding to cart");
      setSuccessMessage("");
    }
  };
  return (
    <aside onClick={handleAddToCart} className="link-icons">
      <FaShoppingCart className="text-xl cursor-pointer" />
    </aside>
  );
};

export default AddToCart;
