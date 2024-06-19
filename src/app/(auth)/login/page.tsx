"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../../../redux/services/AuthSlice";
import { useLoginMutation } from "../../../../redux/services/UserApiSclice";
import { useRouter } from "next/navigation";
// export const metadata = {
//   title: "Login",
// };
const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [login, { isLoading, error }] = useLoginMutation();
  const { user } = useSelector((state: any) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      console.log("Please enter credentials");
    } else {
      try {
        // const res = await fetch("http://localhost:5000/api/users/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ email, password }),
        // });
        const res = await login({ email, password }).unwrap();
        if (res.ok) {
          // Request was successful, handle the response here
          // const data = await res.json();
          dispatch(setUserDetails(res));
          router.replace("/");
        } else {
          // Request failed, handle the error here
          const errorData = await res.json();
          console.error("Registration failed:", errorData);
        }
      } catch (error) {
        console.error("An error occurred during registration:", error);
      }
    }
    setEmail("");
    setPassword("");
  };
  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  });
  return (
    <>
      <div className="p-5 md:p-[5rem]">
        <div className="flex flex-col lg:flex-row space-x-[2rem] lg:items-start mt-[6rem]">
          <form className="lg:w-[50%] xl:w-[40%]" onSubmit={handleSubmit}>
            {/* top title */}
            <div className="relative mb-5 lg:mb-[4rem]">
              <h1 className="text-4xl lg:text-4xl xl:text-6xl font-montserrat text-dark-green capitalize ml-3">
                Login to Fullbeauty{" "}
              </h1>
              <Image
                src={"/circle.svg"}
                alt="circle.svg"
                width={500}
                height={500}
                className="w-[6.5rem] lg:w-[7rem] xl:w-[12rem] absolute top-1 -left-[1rem]"
              />
            </div>
            {/* end of title */}

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              className="signup-input"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name="password"
              id="password"
              placeholder="Enter password"
              className="signup-input"
            />
            <div className="mt-5 lg:mt-[1rem] font-montserrat">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="agreement"
                  id="agreement"
                  className="w-[1rem] mt-[5px] form-checkbox"
                />

                <p>Remember me</p>
              </div>

              <button type="submit" className="text-[#fff] bg-dark-green py-4 px-8 my-[2rem]">
                Login
              </button>
              <p className="mb-[2rem]">
                Don't have an account yet? <Link href={"/register"}> Sign up </Link>{" "}
              </p>
            </div>
          </form>
          <aside className="lg:w-1/2 xl:w-[60%]">
            <Image
              src={"/dis-image-2.webp"}
              alt="Intro image"
              height={500}
              width={500}
              className="hidden lg:block h-full w-[90%] mx-auto object-cover"
            />
          </aside>
        </div>
      </div>
    </>
  );
};

export default Login;
