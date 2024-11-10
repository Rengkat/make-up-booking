"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  useReverifyEmailMutation,
  useVerifyEmailMutation,
} from "../../../../../redux/services/AuthApiSlice";

function VerifyEmailContent() {
  const [verifyEmail, { isLoading, isError, isSuccess }] = useVerifyEmailMutation();
  const [reVerifyEmail, reverifyData] = useReverifyEmailMutation();
  const search = useSearchParams();
  const verificationToken = search.get("verificationToken");
  const email = search.get("email");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const reverifyEmail = async () => {
    try {
      const res = await reVerifyEmail({ email }).unwrap();
      if (isSuccess) {
        setSuccessMessage(res.message || "Reverification email sent!");
      }
    } catch (err) {
      setErrorMessage(
        (err as { data: { message: string } })?.data?.message || "Reverification failed."
      );
    }
  };

  useEffect(() => {
    const fetchVerifyEmail = async () => {
      try {
        const res = await verifyEmail({ verificationToken, email }).unwrap();
        setSuccessMessage(res.message);
      } catch (err) {
        setErrorMessage(
          (err as { data: { message: string } })?.data?.message || "Verification failed."
        );
      }
    };

    if (verificationToken && email) {
      fetchVerifyEmail();
    }
  }, [verificationToken, email, verifyEmail]);

  return (
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
            {!isLoading && isSuccess && (
              <>
                <div className="text-center mb-5 lg:mb-[1rem]">
                  <h1 className="text-xl lg:text-2xl xl:text-4xl font-montserrat text-dark-green capitalize ml-3">
                    Account Confirmed
                  </h1>
                </div>
                <div className="flex justify-center">
                  <Link href={"/login"} className="text-[#fff] bg-dark-green py-4 px-8 my-[1rem]">
                    Please Login
                  </Link>
                </div>
              </>
            )}
            {isError && (
              <p className="bg-red-300 text-red-600 font-semibold text-center p-2">
                {errorMessage}
              </p>
            )}
            {!isLoading && reverifyData.isSuccess && (
              <p className="bg-orange-300 text-dark-gold font-semibold text-center p-2">
                {reverifyData.data?.message || successMessage}
              </p>
            )}
            {!isLoading && isError && (
              <div className="flex justify-center">
                <button
                  onClick={reverifyEmail}
                  disabled={reverifyData.isLoading}
                  className="text-[#fff] bg-dark-green py-4 px-8 my-[1rem]">
                  {reverifyData.isLoading ? "Reverifying..." : "Reverify"}
                </button>
              </div>
            )}
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
  );
}

export default function VerifyEmailComp() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailContent />
    </Suspense>
  );
}
