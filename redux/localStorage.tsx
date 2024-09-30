"use client";
import Cookies from "js-cookie";

// export const addTokenToLocalStorage = (token: string) => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem("token", JSON.stringify(token));
//   }
// };

export const removeTokenFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
};

export const getTokenFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const result = localStorage.getItem("token");
    try {
      return result ? JSON.parse(result) : null;
    } catch (error) {
      console.error("Error parsing token:", error);
      return null;
    }
  }
  return null;
};

export const storeGridNum = (num: number) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("grid", JSON.stringify(num));
  }
};

export const getShopGrid = () => {
  if (typeof window !== "undefined") {
    const result = localStorage.getItem("grid");
    return result ? JSON.parse(result) : null;
  }
  return null;
};
