import Image from "next/image";
import Link from "next/link";
import React from "react";
const HoveredNav = dynamic(() => import("./HoveredNav"), { ssr: false });
import ActiveLink from "./ActiveLink";
import NavMenu from "./NavMenu";
import CartMenu from "./CartMenu";
import dynamic from "next/dynamic";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between px-5 lg:px-6 py-2 lg:py-0">
      {/* logo */}
      <Link href={"/"}>
        <Image
          src={"/Fullbeauty.svg"}
          alt="logo"
          priority={true}
          height={500}
          width={500}
          className="logo w-[5rem] lg:w-[7rem]"
        />
      </Link>
      {/* other links with icons */}
      <div className="flex list-none items-center gap-5 lg:gap-6">
        {/* Nav links only on desktop */}
        <ul className="hidden lg:flex gap-6 mr-5">
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
        <div className="flex gap-5 lg:gap-6">
          <div className="link-icons">
            <CartMenu />
          </div>
          <HoveredNav />
        </div>
        {/* menu */}
        <NavMenu />
        <Link
          className="hidden lg:block bg-dark-green py-5 px-8 text-white hover:bg-dark-gold"
          href={"/appointment"}>
          Appointment
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
