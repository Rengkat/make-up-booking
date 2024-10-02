"use client";
import Image from "next/image";
import Link from "next/link";
import React, { FormEvent, useState, useEffect } from "react";
import { useForgotPasswordMutation } from "../../../../../redux/services/AuthApiSlice";

const ForgotPassword = () => {
  const [forgotPassword, { isLoading, isSuccess, isError }] = useForgotPasswordMutation();
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isErrorMessage, setIsErrorMessage] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (email === "") {
      return;
    }

    try {
      const res = await forgotPassword({ email }).unwrap();
      setSuccessMessage(res.message);
      console.log(res.message);
      setEmail("");
    } catch (error: any) {
      setErrorMessage(error.data?.message || "An error occurred during the process");
    }
  };

  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  return (
    <>
      <div className="p-5 md:p-[5rem] h-[100vh] lg:h-full">
        <div className="flex flex-col lg:flex-row space-x-[2rem] lg:items-start mt-[6rem]">
          <form onSubmit={handleSubmit} className="lg:w-[50%] xl:w-[40%]">
            {/* top title */}
            <div className="relative mb-5 lg:mb-[4rem]">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-montserrat text-dark-green capitalize ml-3">
                Forgot Password
              </h1>
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

            <div className="mt-0 lg:mt-[1rem] font-montserrat">
              {isErrorMessage && (
                <div className="bg-red-700 text-white p-2 mt-3">{errorMessage}</div>
              )}
              {isSuccess && !isErrorMessage && (
                <div className="bg-dark-gold text-white p-3 mt-2">{successMessage}</div>
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
