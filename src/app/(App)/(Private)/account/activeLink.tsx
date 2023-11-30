"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface Props {
  link: string;
  text: string;
  icon: React.ReactNode;
}
const ActiveLink = ({ link, text, icon }: Props) => {
  const path = usePathname();
  const active = link === `${path}`;
  return (
    <Link className={`account-links ${active ? "text-dark-gold" : " text-slate-600"}`} href={link}>
      {icon} <span>{text}</span>
    </Link>
  );
};

export default ActiveLink;
