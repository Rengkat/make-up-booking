"use client";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openSideCart } from "../../redux/services/AppSlice";
import dynamic from "next/dynamic";
import { useGetUserCartProductsQuery } from "../../redux/services/CartApiSlice";
const CartModal = dynamic(() => import("./CartModal"), { ssr: false });

const CartMenu = () => {
  const { data } = useGetUserCartProductsQuery({});

  const dispatch = useDispatch();
  const handleOpenSideCart = () => {
    dispatch(openSideCart());
  };
  return (
    <>
      <div onClick={handleOpenSideCart} className="relative">
        <FaShoppingCart className="text-base cursor-pointer" />
        {data?.cart && data?.cart?.length > 0 && (
          <div className="w-5 h-5 p-2 text-sm  rounded-lg -top-5 bg-red-600 text-white absolute grid place-content-center">
            {data?.cart?.length}
          </div>
        )}
      </div>

      <CartModal />
    </>
  );
};

export default CartMenu;
