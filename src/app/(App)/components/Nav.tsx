import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart, FaUserTie } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-5">
      <Link href={"/"}>
        <Image
          src={"/fullbeauty.svg"}
          alt="logo"
          priority={true}
          height={500}
          width={500}
          className="logo w-[4rem]"
        />
      </Link>
      <div className="flex list-none items-center gap-5">
        <ul className="flex gap-5">
          <li className="link-icons">
            <FaShoppingCart className="text-base" />
          </li>
          <li className="link-icons">
            <FaUserTie className="text-base" />
          </li>
        </ul>
        <div className="menu">
          <div className="menu-child bg-dark-green"></div>
          <div className="menu-child bg-dark-green w-[70%]"></div>
          <div className="menu-child bg-dark-green"></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
