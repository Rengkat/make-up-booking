"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaShoppingCart, FaUserTie } from "react-icons/fa";

const HoveredNav = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <aside className="link-icons relative" onMouseEnter={() => setIsHovered(true)}>
      <FaUserTie className="text-base cursor-pointer" />
      {/* dropdown */}
      <div
        onMouseLeave={() => setIsHovered(false)}
        className={`absolute w-[15rem] ${
          isHovered ? "block opacity-100 " : "hidden opacity-0"
        }  z-[2] right-0 bg-white top-full mt-3 text-black p-[0.5rem] shadow`}>
        <Link className="dropdown-link" href={"/account"}>
          Account
        </Link>
        <Link className="dropdown-link" href={"/login"}>
          Login
        </Link>
        <Link className="dropdown-link" href={"/register"}>
          Register
        </Link>
      </div>
    </aside>
  );
};

export default HoveredNav;
