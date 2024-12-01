"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useVerifyPaymentMutation } from "../../../../../redux/services/OrderApiSlice";

const PaymentComp = () => {
  const query = useSearchParams();
  const orderId = query.get("orderId");
  const transactionRef = query.get("trxref");

  const [paymentStatus, setPaymentStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();
  const [verifyPayment, { isLoading, isSuccess, isError }] = useVerifyPaymentMutation();

  useEffect(() => {
    const verify = async () => {
      if (!orderId || !transactionRef) {
        setErrorMessage("Invalid payment details provided.");
        return;
      }

      try {
        const response = await verifyPayment(orderId).unwrap();

        if (response.status === "success") {
          setPaymentStatus("Payment Verified Successfully!");
          setTimeout(() => {
            router.push("/account/orders"); // Redirect to orders page after 3 seconds
          }, 3000);
        } else {
          setErrorMessage(response.message || "Payment verification failed.");
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setErrorMessage(error.message || "An unexpected error occurred.");
        } else {
          setErrorMessage("An unknown error occurred.");
        }
      }
    };

    verify();
  }, [orderId, transactionRef, verifyPayment, router]);

  return (
    <div className="w-full flex flex-col justify-center items-center h-[70vh] bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8 text-center">
        {isLoading ? (
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-lg font-semibold text-gray-700">Verifying your payment...</p>
          </div>
        ) : isError ? (
          <div className="flex flex-col items-center">
            <p className="text-2xl text-red-500 font-semibold mb-2">Payment Failed</p>
            <p className="text-gray-700">{errorMessage}</p>
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600"
              onClick={() => router.push("/retry")}>
              Try Again
            </button>
          </div>
        ) : isSuccess ? (
          <div className="flex flex-col items-center">
            <p className="text-2xl text-green-500 font-semibold mb-2">{paymentStatus}</p>
            <p className="text-gray-700">It was nice doing business with you!</p>
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mt-4"></div>
          </div>
        ) : (
          <p className="text-gray-700">Initializing payment verification...</p>
        )}
      </div>
    </div>
  );
};

export default PaymentComp;
