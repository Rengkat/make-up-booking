"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  useChangePasswordMutation,
  useGetUserDetailsQuery,
  // useUpdateUserDetailMutation,
} from "../../../../../../redux/services/UserApiSlice";

const EditDetail = () => {
  const router = useRouter();
  // Fetch user details from the API
  const { data, isLoading: isFetching } = useGetUserDetailsQuery({});
  const user = data?.user;

  // State for updating user details
  const [userDetail, setUserDetails] = useState({
    firstName: "",
    surname: "",
    email: "",
    oldPassword: "",
    newPassword: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isErr, setIsErr] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [updateUserDetail, { isLoading: isUpdating, isSuccess }] = useUpdateUserDetailMutation();
  const [changePassword, { isLoading: isPasswordChanging, isSuccess: isPasswordChanged, isError }] =
    useChangePasswordMutation();

  // Populate the form fields when user data is fetched
  useEffect(() => {
    if (user) {
      setUserDetails({
        firstName: user.firstName || "",
        surname: user.surname || "",
        email: user.email || "",
        oldPassword: "",
        newPassword: "",
      });
    }
  }, [user]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetail) => ({ ...prevDetail, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (userDetail.newPassword === confirmPassword) {
      try {
        const res = await changePassword({
          newPassword: userDetail.newPassword,
          oldPassword: userDetail.oldPassword,
        }).unwrap();
        setSuccessMessage(res.message);
        setErrorMessage(""); // Clear error message
      } catch (err) {
        setErrorMessage(
          (err as { data: { message: string } })?.data?.message || "Password updating failed"
        );
        setSuccessMessage(""); // Clear success message
      }
    } else {
      setIsErr(true);
      setErrorMessage("Passwords do not match");
    }
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setIsErr(false);

        router.push("/account");
      }, 5000);

      return () => clearTimeout(timer);
    }

    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
        setIsErr(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage, router]);

  if (isFetching) {
    return (
      <div className="flex justify-center w-full">
        <p className="font-semibold text-dark-green text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-white p-5 text-xl text-slate-600 mb-[5rem] lg:p-[2rem]">
        <div className="mb-[1rem]">
          <label className="font-bold block mb-2" htmlFor="firstName">
            First name:
          </label>
          <input
            type="text"
            placeholder="Enter first name"
            name="firstName"
            value={userDetail.firstName}
            onChange={handleChange}
            className="w-full lg:border-b-[1px] border-0 lg:px-0"
          />
        </div>
        <div className="mb-[1rem] lg:mb-[2rem]">
          <label className="font-bold block mb-2" htmlFor="surname">
            Surname:
          </label>
          <input
            type="text"
            placeholder="Enter surname"
            name="surname"
            value={userDetail.surname}
            onChange={handleChange}
            className="w-full lg:border-b-[1px] border-0 lg:px-0"
          />
        </div>
        <div className="mb-[1rem] lg:mb-[2rem]">
          <label className="font-bold block mb-2" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={userDetail.email}
            onChange={handleChange}
            className="w-full lg:border-b-[1px] border-0 lg:px-0"
          />
        </div>
        <div className="mb-[1rem] lg:mb-[2rem]">
          <label className="font-bold block mb-2" htmlFor="oldPassword">
            Current Password:
          </label>
          <input
            type="password"
            name="oldPassword"
            onChange={handleChange}
            placeholder="Enter current password"
            className="w-full lg:border-b-[1px] border-0 lg:px-0"
          />
        </div>
        <div className="mb-[1rem] lg:mb-[2rem]">
          <label className="font-bold block mb-2" htmlFor="newPassword">
            New Password:
          </label>
          <input
            type="password"
            name="newPassword"
            onChange={handleChange}
            placeholder="Enter new password"
            className="w-full lg:border-b-[1px] border-0 lg:px-0"
          />
        </div>
        <div className="mb-[1rem] lg:mb-[2rem]">
          <label className="font-bold block mb-2" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full lg:border-b-[1px] border-0 lg:px-0"
          />
        </div>
        <div className="my-5">
          {!isPasswordChanging && isPasswordChanged && successMessage && (
            <div className="bg-orange-300 text-dark-gold font-semibold text-center p-2">
              {successMessage}
            </div>
          )}
          {/* Error message */}
          {(isErr || isError) && errorMessage && (
            <div className="bg-red-300 text-red-600 font-semibold text-center p-2">
              {errorMessage}
            </div>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="text-white bg-dark-green hover:bg-dark-gold py-3 px-8 lg:my-[1rem]"
            disabled={isFetching || isPasswordChanging}>
            {isPasswordChanging ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default EditDetail;
