"use client";
export const addTokenToLocalStorage = (token: string) => {
  localStorage.setItem("token", JSON.stringify(token));
};

export const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("token");
};

export const getTokenFromLocalStorage = () => {
  const result = localStorage.getItem("token");
  const user = result ? JSON.parse(result) : null;
  return user;
};
export const storeGridNum = (num: number) => {
  localStorage.setItem("grid", JSON.stringify(num));
};
export const getShopGrid = () => {
  const result = localStorage.getItem("grid");
  const num = result ? JSON.parse(result) : null;
  return num;
};
