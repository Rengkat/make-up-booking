"use client";
export const addUserToLocalStorage = (user: string) => {
  localStorage.setItem("token", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("token");
};

export const getUserFromLocalStorage = () => {
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
