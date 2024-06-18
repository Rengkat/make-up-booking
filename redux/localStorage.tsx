"use client";
export const addUserToLocalStorage = (user: string) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
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
