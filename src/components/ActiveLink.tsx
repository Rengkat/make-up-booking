"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface Props {
  href: string;
  text: string;
}
const ActiveLink = ({ href, text }: Props) => {
  const route = usePathname();
  const active = href === `${route}`;
  return (
    <Link className={`${active ? "border-b-2 border-dark-gold pb-1" : ""}`} href={href}>
      {text}
    </Link>
  );
};

export default ActiveLink;
