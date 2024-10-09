"use client";
interface HandleRemoveFromCartProps {
  productId: string;
  removeProductFromCart: any; // RTK mutation function
  setSuccessMessage: React.Dispatch<React.SetStateAction<string>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const handleRemoveFromToCart = async ({
  productId,
  removeProductFromCart,
  setSuccessMessage,
  setErrorMessage,
}: HandleRemoveFromCartProps) => {
  try {
    const res = await removeProductFromCart(productId).unwrap();

    if (res?.message) {
      setSuccessMessage(res.data?.message);
      setErrorMessage("");
    }
  } catch (error: any) {
    setErrorMessage(error?.data?.message || "An error occurred while adding to cart");
    setSuccessMessage("");
  }
};
