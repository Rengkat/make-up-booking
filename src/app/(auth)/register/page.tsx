"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import RegisterComp from "./register";
const Register = () => {
  const { user } = useSelector((store: any) => store.auth);

  const route = useRouter();
  if (user) {
    return route.replace("/");
  }
  return <RegisterComp />;
};

export default Register;
