import React from "react";
import dynamic from "next/dynamic";
const LoginComp = dynamic(() => import("./login"), { ssr: false });

const Login = () => {
  return (
    <>
      <LoginComp />
    </>
  );
};

export default Login;
