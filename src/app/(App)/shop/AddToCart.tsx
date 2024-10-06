"use client";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useAddToCartMutation } from "../../../../redux/services/CartApiSlice";
import { handleAddToCart } from "./HandleAddToCart";

interface Props {
  product: {
    _id: string;
    name: string;
  };
}

const AddToCart = ({ product }: Props) => {
  const [addToCart, { isLoading }] = useAddToCartMutation();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddClick = () => {
    handleAddToCart({
      productId: product._id,
      fromDetailPage: false,
      addToCart,
      setSuccessMessage,
      setErrorMessage,
    });
  };

  return (
    <aside onClick={handleAddClick} className="link-icons">
      <FaShoppingCart className="text-xl cursor-pointer" />
    </aside>
  );
};

export default AddToCart;
