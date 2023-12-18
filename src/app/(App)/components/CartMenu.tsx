"use client";
import { FaShoppingCart } from "react-icons/fa";
import CartModal from "./CartModal";
import { useDispatch, useSelector } from "react-redux";
import { openSideCart } from "../../../../redux/services/AppSlice";

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
