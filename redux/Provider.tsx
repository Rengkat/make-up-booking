"use client";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import React, { ReactNode } from "react";
interface Props {
  children: ReactNode;
}
const Providers = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
