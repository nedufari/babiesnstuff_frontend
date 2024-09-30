import React from "react";
import Layout from "../components/shared/Layout";
import { IChildren } from "../types";

const CartLayout: React.FC<IChildren> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default CartLayout;
