"use client";
export const addTokenToLocalStorage = (token: string) => {
  if (typeof window !== "undefined") {
    // Access localStorage here
    localStorage.setItem("token", JSON.stringify(token));
  }
};

export const removeTokenFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    // Access localStorage here
    localStorage.removeItem("token");
  }
};

export const getTokenFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    // Access localStorage here
    const result = localStorage.getItem("token");
    const user = result ? JSON.parse(result) : null;
    return user;
  }
};
export const storeGridNum = (num: number) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("grid", JSON.stringify(num));
  }
};
export const getShopGrid = () => {
  if (typeof window !== "undefined") {
    const result = localStorage.getItem("grid");
    const num = result ? JSON.parse(result) : null;
    return num;
  }
};
