"use client";

import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLogin } = useSelector((store: any) => store.auth);
  const router = useRouter();

  useEffect(() => {
    if (isLogin) {
      router.replace("/");
    }
  }, [isLogin, router]);

  if (isLogin) return null;

  return <div className="bg-lighter-gold">{children}</div>;
};

export default AuthLayout;
