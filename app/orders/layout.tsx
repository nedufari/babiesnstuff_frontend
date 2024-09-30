import React from "react";
import Layout from "../components/shared/Layout";
import { IChildren } from "../types";

const TheOrderLayout: React.FC<IChildren> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default TheOrderLayout;
