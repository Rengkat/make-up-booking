import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { ProductType } from "../../../../utilities/extras";
interface Props {
  product: ProductType;
}
const AddToWishlist = ({ product }: Props) => {
  return (
    <aside className="link-icons">
      <FaRegHeart className="text-xl cursor-pointer" />
    </aside>
  );
};

export default AddToWishlist;
