"use client";

export const addUserToLocalStorage = (user: object) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user));
  }
};

export const removeUserFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user");
  }
};

export const getUserFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const result = localStorage.getItem("user");
    try {
      return result ? JSON.parse(result) : null;
    } catch (error) {
      console.error("Error parsing user:", error);
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
