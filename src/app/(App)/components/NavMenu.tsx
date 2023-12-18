"use client";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./SideBar";
import { openSideBar } from "../../../../redux/services/AppSlice";

const NavMenu = () => {
  const dispatch = useDispatch();

  const handleOpenSideBar = () => {
    dispatch(openSideBar());
  };
  return (
    <div onClick={handleOpenSideBar} className="menu group">
      <div className="menu-child"></div>
      <div className="menu-child w-[70%] group-hover:w-full transition-all duration-150"></div>
      <div className="menu-child"></div>
      <SideBar />
    </div>
  );
};

export default NavMenu;
