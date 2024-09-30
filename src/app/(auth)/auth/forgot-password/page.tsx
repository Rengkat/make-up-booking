"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState, useEffect } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <div className="p-5 md:p-[5rem] h-[100vh] lg:h-full">
        <div className="flex flex-col lg:flex-row space-x-[2rem] lg:items-start mt-[6rem]">
          <form className="lg:w-[50%] xl:w-[40%]">
            {/* top title */}
            <div className="relative mb-5 lg:mb-[4rem]">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-montserrat text-dark-green capitalize ml-3">
                Forgot Password
              </h1>
            </div>
            {/* end of title */}

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              className="signup-input"
            />

            <div className="mt-0 lg:mt-[1rem] font-montserrat">
              {isErrorMessage && (
                <div className="bg-red-700 text-white p-2 mb-2">{errorMessage}</div>
              )}

              <button type="submit" className="text-[#fff] bg-dark-green py-4 px-8 my-[2rem]">
                {isLoading ? "Loading..." : "Get Reset Password Link"}
              </button>
              <p className="mb-[2rem]">
                Already have an account?{" "}
                <Link className="text-dark-gold" href={"/login"}>
                  {" "}
                  Login{" "}
                </Link>{" "}
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

export default ForgotPassword;
