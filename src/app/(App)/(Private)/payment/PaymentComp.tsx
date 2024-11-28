"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
const PaymentComp = () => {
  const query = useSearchParams();
  const orderId = query.get("orderId");
  const transactionRef = query.get("trxref");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const history = useRouter();

  // Call backend to verify the payment once the component mounts
  useEffect(() => {
    const verifyPayment = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/orders/verify/${orderId}`, {
          method: "POST",
        });
        if (response?.status === "success") {
          setPaymentStatus("Payment verified successfully");
          setTimeout(() => {
            history.push("/orders"); // Redirect to orders page after successful verification
          }, 3000); // Redirect after 3 seconds
        } else {
          setPaymentStatus("Payment verification failed");
        }
      } catch (err) {
        setError("Error verifying payment.");
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [orderId, history]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>{paymentStatus}</h1>
      {!paymentStatus && <p>Please wait while we verify your payment...</p>}
    </div>
  );
};

export default PaymentComp;
