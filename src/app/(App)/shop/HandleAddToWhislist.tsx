"use client";
interface HandleAddToCartProps {
  productId: string;
  fromDetailPage: boolean;
  addToWishlist: any; // RTK mutation function
  setSuccessMessage: React.Dispatch<React.SetStateAction<string>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

export const handleAddToWishlist = async ({
  productId,
  fromDetailPage,
  addToWishlist,
  setSuccessMessage,
  setErrorMessage,
}: HandleAddToCartProps) => {
  try {
    const res = await addToWishlist({ productId, fromDetailPage }).unwrap();

    if (res?.message) {
      setSuccessMessage(res.data?.message);
      setErrorMessage("");
    }
  } catch (error: any) {
    setErrorMessage(error?.data?.message || "An error occurred while adding to cart");
    setSuccessMessage("");
  }
};
