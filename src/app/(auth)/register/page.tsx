"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import RegisterComp from "./register";
const Register = () => {
  const { token } = useSelector((store: any) => store.auth);
  console.log(token);
  const route = useRouter();
  if (token) {
    return route.replace("/");
  }
  return <RegisterComp />;
};

export default Register;
