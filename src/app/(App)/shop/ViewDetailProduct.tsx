import Link from "next/link";
import React from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
interface Props {
  productId: string;
}
const ViewDetailProduct = ({ productId }: Props) => {
  return (
    <Link href={`/shop/${productId}`}>
      <aside className="link-icons">
        <MdOutlineRemoveRedEye className="text-xl cursor-pointer" />
      </aside>
    </Link>
  );
};

export default ViewDetailProduct;
