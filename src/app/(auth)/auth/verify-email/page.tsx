"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const VerifyEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  return (
    <>
      <div className="p-5 md:p-[5rem] h-[100vh] lg:h-full">
        <div className="flex flex-col lg:flex-row space-x-[2rem] lg:items-start mt-[6rem]">
          <form className="lg:w-[50%] xl:w-[40%]">
            <Image
              src={"/fullbeauty.svg"}
              alt="logo"
              priority={true}
              height={500}
              width={500}
              className="logo hidden lg:block w-[5rem] lg:w-[7rem]"
            />
            <div className="pt-[4rem]">
              <div className="text-center mb-5 lg:mb-[1rem]">
                <h1 className="text-xl lg:text-2xl xl:text-4xl font-montserrat text-dark-green capitalize ml-3">
                  Account Confirmed
                </h1>
              </div>
              <div className="flex  justify-center ">
                <Link
                  href={"/login"}
                  type="submit"
                  className="text-[#fff] bg-dark-green py-4 px-8 my-[1rem]">
                  Please Login
                </Link>
              </div>
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

export default VerifyEmail;
