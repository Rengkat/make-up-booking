"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface Props {
  link: string;
  text: string;
}
const ActiveLink = ({ link, text }: Props) => {
  const path = usePathname();
  const active = link === `${path}`;
  return (
    <Link
      className={`py-2 px-4 lg:py-4 lg:px-10 rounded-md ${
        active ? "bg-dark-green" : "bg-dark-gold"
      }`}
      href={link}>
      <span>{text}</span>
    </Link>
  );
};

export default ActiveLink;
