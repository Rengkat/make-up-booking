import React from "react";
import HeroComp from "../components/HeroComp";
import CircledWords from "../components/CircledWords";
import Link from "next/link";

const PricePlanLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <HeroComp title="Price Plans" />

      <div className="flex justify-center pt-[8rem] pb-[5rem]">
        <div className="flex gap-1 text-white lg:text-xl">
          <Link
            className=" bg-dark-gold py-2 px-4 lg:py-4 lg:px-10 rounded-md"
            href={"/price-plan/makeups"}>
            Make Ups
          </Link>
          <Link
            className=" bg-dark-gold py-2 px-4 lg:py-4 lg:px-10 rounded-md"
            href={"/price-plan"}>
            Massage and other Therapies
          </Link>
        </div>
      </div>
      <main className="pb-[3rem]">{children}</main>
    </div>
  );
};

export default PricePlanLayout;
