"use client";
interface HandleUpdateQuantityProps {
  id: string;
  quantity: number;
  action: "increment" | "decrement";
  updateQuantity: any; // RTK mutation function
}

export const handleUpdateQuantityFun = async ({
  id,
  quantity,
  action,
  updateQuantity,
}: HandleUpdateQuantityProps) => {
  try {
    const newQuantity = action === "increment" ? quantity + 1 : quantity > 1 ? quantity - 1 : 1;

    const res = await updateQuantity({ id, quantity: newQuantity }).unwrap();

    if (res.success) {
      console.log("Quantity updated successfully:", res.data.message);
    }
  } catch (error: any) {
    console.error("Error updating quantity:", error.data.message);
  }
};
