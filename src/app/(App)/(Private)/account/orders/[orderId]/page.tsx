"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import {
  useGetSingleOrderQuery,
  useUpdateOrderMutation,
} from "../../../../../../../redux/services/OrderApiSlice";
import { formatter } from "../../../../../../../utilities/extras";
import Review from "./Review";

interface Props {
  params: { orderId: string };
}

const DetailOrder = ({ params }: Props) => {
  const orderId = params.orderId;

  const { data, isLoading, isError } = useGetSingleOrderQuery(orderId);
  const [updateOrder, { isLoading: isUpdating }] = useUpdateOrderMutation();

  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isReviewing, setIsReviewing] = useState(false);

  const handleCancel = async () => {
    setSuccessMessage(null);
    setErrorMessage(null);
    try {
      await updateOrder({ id: data?.data?._id, status: "canceled" }).unwrap();
      setSuccessMessage("Order canceled successfully!");
    } catch (error) {
      setErrorMessage("Failed to cancel the order. Please try again.");
    }
  };
  // console.log(data);
  // Loading State
  if (isLoading) {
    return <div className="text-center mt-5">Loading order details...</div>;
  }

  // Error State
  if (isError || !data) {
    return (
      <div className="text-center mt-5 text-red-500">
        Failed to fetch order details. Please try again.
      </div>
    );
  }

  return (
    <div>
      <h1 className="bg-dark-gold text-white py-3 px-5 shadow font-semibold">Order Detail</h1>
      <div className="mt-5">
        {/* Success and Error Messages */}
        {successMessage && <div className="text-center text-green-500 mb-4">{successMessage}</div>}
        {errorMessage && <div className="text-center text-red-500 mb-4">{errorMessage}</div>}

        {/* Order Items */}
        {data?.data?.orderItems.length === 0 ? (
          <div className="text-center text-gray-500">No products found in this order.</div>
        ) : (
          data?.data?.orderItems.map((product: any) => (
            <Fragment key={product._id}>
              <div className="h-[15vh] flex gap-5 rounded-md shadow mt-5">
                <Image
                  className="w-[20%] object-cover"
                  src={product.image}
                  height={500}
                  width={500}
                  alt={product.name}
                />
                <div className="w-[80%] flex justify-between p-5">
                  <div>{product.name}</div>
                  <div>{formatter.format(product.price)}</div>
                  <div>
                    <button
                      onClick={handleCancel}
                      disabled={data?.data?.deliveryStatus === "delivered" || isUpdating}
                      className={`${
                        data?.data?.deliveryStatus === "delivered" || isUpdating
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-dark-gold cursor-pointer hover:bg-dark-green"
                      } text-white p-2 shadow`}>
                      {isUpdating
                        ? "Cancelling..."
                        : data?.data?.deliveryStatus === "delivered"
                        ? "Cancel Order"
                        : data?.data?.status.charAt(0).toUpperCase() +
                          data?.data?.deliveryStatus.slice(1)}
                    </button>
                  </div>
                  {data?.data?.deliveryStatus === "delivered" && (
                    <div>
                      <button
                        onClick={() => setIsReviewing((prev) => !prev)}
                        className="bg-dark-gold text-white py-2 px-6 rounded-md shadow-lg hover:bg-dark-green active:bg-dark-green transition duration-300">
                        Add Review
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {isReviewing && (
                <Review setIsReviewing={setIsReviewing} productId={product?.product?._id} />
              )}
            </Fragment>
          ))
        )}
      </div>
    </div>
  );
};

export default DetailOrder;
