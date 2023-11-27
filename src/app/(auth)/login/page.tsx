import Image from "next/image";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Login",
};
const Login = () => {
  return (
    <>
      <div className="p-5 md:p-[5rem]">
        <div className="flex flex-col lg:flex-row space-x-[2rem] lg:items-start mt-[6rem]">
          <form className="lg:w-[50%] xl:w-[40%]">
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
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              className="signup-input"
            />
            <input
              type="password"
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

              <button className="text-[#fff] bg-dark-green py-4 px-8 my-[2rem]">Login</button>
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
