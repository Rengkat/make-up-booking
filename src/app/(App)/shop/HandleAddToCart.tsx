"use client";
interface HandleAddToCartProps {
  productId: string;
  fromDetailPage: boolean;
  addToCart: any; // RTK mutation function
  setSuccessMessage: React.Dispatch<React.SetStateAction<string>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const handleAddToCart = async ({
  productId,
  fromDetailPage,
  addToCart,
  setSuccessMessage,
  setErrorMessage,
}: HandleAddToCartProps) => {
  console.log(productId);
  try {
    const res = await addToCart({ productId, fromDetailPage }).unwrap();

    if (res?.message) {
      setSuccessMessage(res.data?.message);
      setErrorMessage("");
    }
  } catch (error: any) {
    setErrorMessage(error?.data?.message || "An error occurred while adding to cart");
    setSuccessMessage("");
  }
};
