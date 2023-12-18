"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { isOpenSideBar } = useSelector((store: any) => store);

  return (
    <div
      className={`${
        isOpenSideBar ? "translate-x-full" : "translate-x-0"
      }  w-full bg-transparent fixed inset-0 z-[5] flex justify-end transition-all duration-500 ease-linear`}>
      <div className="bg-white w-[25rem] h-full">
        <div className="flex items-center justify-between p-10">
          <Link href={"/"}>
            <Image
              src={"/fullbeauty.svg"}
              alt="logo"
              priority={true}
              height={500}
              width={500}
              className="logo w-[5rem]"
            />
          </Link>
          <div className="w-[3rem] h-[3rem] rounded-full bg-dark-green text-white text-xl flex items-center justify-center">
            <IoMdClose />
          </div>
        </div>
        <ul className="p-10 mt-[3rem]">
          <li className="side-link">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="side-link">
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li className="side-link">
            <Link href={"/services"}>Services</Link>
          </li>
          <li className="side-link">
            <Link href={"/price"}>Price Plan</Link>
          </li>
          <li className="side-link">
            <Link href={"/about-us"}>About Us</Link>
          </li>
        </ul>
        <div className="my-[3rem] pl-5">
          <Link
            href={"/appointment"}
            className="py-4 px-10 bg-dark-green text-white hover:bg-dark-gold">
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
