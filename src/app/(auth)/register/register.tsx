import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useRegisterMutation } from "../../../../redux/services/AuthApiSlice";

const RegisterComp = () => {
  const [register, { isLoading, isSuccess, isError }] = useRegisterMutation();
  const [isCheck, setIsCheck] = useState(false);
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

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
    const { firstName, surname, email, password } = userDetails;

    // Check if all fields are filled
    const allFieldsFilled = [firstName, surname, email, password].every((field) => field !== "");

    if (!allFieldsFilled) {
      setErrorMessage("Please enter all fields");
      setIsErrorMessage(true);
      setTimeout(() => {
        setIsErrorMessage(false);
      }, 2000); // Hide after 2 seconds
      return;
    }

    if (!isCheck) {
      setErrorMessage("Agree to terms and conditions");
      setIsErrorMessage(true);
      setTimeout(() => {
        setIsErrorMessage(false);
      }, 2000); // Hide after 2 seconds
      return;
    }

    try {
      const res = await register(userDetails).unwrap();
      const message = res.message;

      setSuccessMessage(message);
      router.replace("/login");
    } catch (error: any) {
      setErrorMessage(error.message);
      setIsErrorMessage(true);
      setTimeout(() => {
        setIsErrorMessage(false);
      }, 2000); // Hide after 2 seconds
    }
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
            <div className="font-montserrat">
              {isErrorMessage && (
                <div className="bg-red-700 text-white p-2 mb-2">{errorMessage}</div>
              )}
              {isSuccess && !isErrorMessage && (
                <div className="bg-dark-gold text-white p-2 mb-2">{successMessage}</div>
              )}
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
                {isLoading ? "Loading..." : "Register"}
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

export default RegisterComp;
