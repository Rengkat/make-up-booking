import React from "react";
import HeroComp from "../../../../components/HeroComp";
import Link from "next/link";
import { VscAccount } from "react-icons/vsc";
import { GrSchedule } from "react-icons/gr";
import { PiHandbagThin } from "react-icons/pi";
import { FaListUl } from "react-icons/fa";
import { HiOutlineHomeModern } from "react-icons/hi2";
import ActiveLink from "./activeLink";
import { Metadata } from "next";
import LogoutComp from "./Logout";
export const metadata: Metadata = {
  title: "My account",
};
const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeroComp title="My Account" />
      <div className="flex flex-col p-[1rem] lg:px-[5rem] lg:flex-row lg:gap-[2rem] lg:pt-[8rem]">
        <aside className="my-[3rem] lg:my-0 lg:w-[25%]">
          <div className="bg-white p-5 shadow">
            <ActiveLink
              link="/account"
              text="Account Details"
              icon={<VscAccount className="account-icon" />}
            />
            <ActiveLink
              link="/account/appointments"
              text="Appointments"
              icon={<GrSchedule className="account-icon" />}
            />
            <ActiveLink
              link="/account/orders"
              text="My Orders "
              icon={<PiHandbagThin className="account-icon" />}
            />
            <ActiveLink
              link="/account/wishlist"
              text="Wishlist"
              icon={<FaListUl className="account-icon" />}
            />
            <ActiveLink
              link="/account/addresses"
              text="Addresses"
              icon={<HiOutlineHomeModern className="account-icon" />}
            />
            <LogoutComp />
          </div>
        </aside>
        <main className="lg:w-[75%] mb-[5rem] lg:mb-[10rem]">{children}</main>
      </div>
    </div>
  );
};

export default AccountLayout;
