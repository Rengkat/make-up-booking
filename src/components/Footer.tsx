import React from "react";
import ActiveLink from "./ActiveLink";
import { FaShoppingCart } from "react-icons/fa";
import CartModal from "./CartModal";
import HoveredNav from "./HoveredNav";
import SideBar from "./SideBar";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <nav className="w-full flex items-center justify-between p-[5rem]">
        <ul className="flex flex-col lg:flex-row gap-6 mr-5">
          <li className="nav-link">
            <ActiveLink href="/" text="Home" />
          </li>
          <li className="nav-link">
            <ActiveLink href="/shop" text="Shop" />
          </li>

          <li className="nav-link">
            <ActiveLink href="/price-plan" text="Price Plan" />
          </li>
          <li className="nav-link">
            <ActiveLink href="/about-us" text="About Us" />
          </li>
        </ul>
        {/* logo */}
        <Link href={"/"}>
          <Image
            src={"/fullbeauty.svg"}
            alt="logo"
            priority={true}
            height={500}
            width={500}
            className="logo w-[5rem] lg:w-[7rem]"
          />
        </Link>
        <ul className=" lg:flex gap-6 mr-5">
          <li className="nav-link">
            <a href="#">Facebook</a>
          </li>
          <li className="nav-link">
            <a href="#">Twitter</a>
          </li>

          <li className="nav-link">
            <a href="#">Instagram</a>
          </li>
          <li className="nav-link">
            <ActiveLink href="/about-us" text="About Us" />
          </li>
        </ul>
      </nav>
      <div className=" bg-dark-green text-white py-5 lg:text-xl font-montserrat text-center">
        {new Date().getFullYear()} Fullybeauty. All Right Reserved
      </div>
    </>
  );
};

export default Footer;
