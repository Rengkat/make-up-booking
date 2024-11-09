"use client";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openSideCart } from "../../redux/services/AppSlice";
import dynamic from "next/dynamic";
const CartModal = dynamic(() => import("./CartModal"), { ssr: false });

const CartMenu = () => {
  const { isOpenSideCart } = useSelector((store: any) => store);
  const dispatch = useDispatch();
  const handleOpenSideCart = () => {
    dispatch(openSideCart());
  };
  return (
    <>
      <div onClick={handleOpenSideCart}>
        <FaShoppingCart className="text-base cursor-pointer" />
      </div>

      <CartModal />
    </>
  );
};

export default CartMenu;
