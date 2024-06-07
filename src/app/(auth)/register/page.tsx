"use client";
import Image from "next/image";
import Link from "next/link";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { ChangeEvent, FormEvent, useState } from "react";
// export const metadata = {
//   title: "Register",
// };
const Register = () => {
  const [isCheck, setIsCheck] = useState(false);

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    surname: "",
    email: "",
    password: "",
  });
  const handleCheck = () => {
    setIsCheck((prev) => !prev);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (
      userDetails.email !== "" ||
      userDetails.firstName !== "" ||
      userDetails.surname !== "" ||
      userDetails.password !== ""
    ) {
      //check box

      if (isCheck) {
        try {
          const res = await fetch("http://localhost:5000/api/users/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userDetails),
          });
          if (res.ok) {
            // Request was successful, handle the response here
            const data = await res.json();
            console.log(data);
          } else {
            // Request failed, handle the error here
            const errorData = await res.json();
            console.error("Registration failed:", errorData);
          }
        } catch (error) {
          console.error("An error occurred during registration:", error);
        }
      } else {
        console.log("please check the box");
      }
    } else {
      console.log("Please enter all field");
    }

    // setUserDetails({ firstName: "", lastName: "", email: "", password: "" });
  };

  return (
    <>
      <div className="p-5 md:p-[5rem]">
        <div className="flex flex-col lg:flex-row space-x-[2rem] lg:items-start mt-[6rem]">
          <form onSubmit={handleSubmit} className="lg:w-[50%] xl:w-[40%]">
            {/* top title */}
            <div className="relative mb-5">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-montserrat text-dark-green capitalize ml-5">
                New to Fullbeauty
              </h1>
              <Image
                src={"/circle.svg"}
                alt="circle.svg"
                width={500}
                height={500}
                className="w-[6.5rem] lg:w-[9rem] xl:w-[10rem] absolute top-1 -left-[0.5rem]"
              />
            </div>
            {/* end of title */}
            <input
              onChange={handleChange}
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
              className="signup-input"
            />
            <input
              onChange={handleChange}
              type="text"
              name="surname"
              id="surname"
              placeholder="Enter surname"
              className="signup-input"
            />
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              className="signup-input"
            />
            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className="signup-input"
            />
            <div className="mt-5 font-montserrat">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  defaultChecked={isCheck}
                  onChange={handleCheck}
                  name="agreement"
                  id="agreement"
                  className="w-[1rem] mt-[5px] form-checkbox"
                />

                <p>
                  By creating an account, you agree to the Terms and Conditions{" "}
                  <span className="text-red-500">*</span>
                </p>
              </div>
              <p className="mt-3">
                Your personal data will be used to support your experience throughout this website,
                to manage access to your account, and for other purposes described in our privacy
                policy.
              </p>
              <button type="submit" className="text-[#fff] bg-dark-green py-4 px-8 my-5">
                Register
              </button>
              <p className="mb-[2rem]">
                already have an account? <Link href={"/login"}> Login </Link>{" "}
              </p>
            </div>
          </form>
          <aside className="lg:w-1/2 xl:w-[60%]">
            <Image
              src={"/dis-image.webp"}
              alt="Intro image"
              height={500}
              width={500}
              className="hidden lg:block h-[100%] w-[90%] mx-auto mt-5 object-cover"
            />
          </aside>
        </div>
      </div>
    </>
  );
};

export default Register;
