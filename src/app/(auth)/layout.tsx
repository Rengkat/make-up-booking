"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useSelector((store: any) => store.auth);
  const router = useRouter();
  console.log(user);
  if (user) return router.replace("/");
  return <div className=" bg-lighter-gold">{children}</div>;
};

export default AuthLayout;
