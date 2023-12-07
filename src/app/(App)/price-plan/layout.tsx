import React from "react";
import HeroComp from "../components/HeroComp";
import CircledWords from "../components/CircledWords";
import Link from "next/link";
import ActiveLink from "./activeLink";

const PricePlanLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeroComp title="Price Plans" />

      <div className="flex justify-center pt-[8rem] pb-[5rem]">
        <div className="flex gap-1 text-white lg:text-xl">
          <ActiveLink link="/price-plan/makeups" text="Make Ups" />
          <ActiveLink link="/price-plan" text="Massage" />
        </div>
      </div>
      <main className="pb-[3rem]">{children}</main>
    </div>
  );
};

export default PricePlanLayout;
