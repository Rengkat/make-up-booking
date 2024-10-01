"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const PrivateRouteLayout = ({ children }: { children: React.ReactNode }) => {
  const { isLogin } = useSelector((state: any) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.replace("/login");
    }
  }, [isLogin, router]);

  if (!isLogin) {
    return null;
  }

  return <div>{children}</div>;
};

export default PrivateRouteLayout;
