import React from "react";
import { IChildren } from "../types";
import RequireNoAuth from "../components/shared/RequireNoAuth";

const LoginLayout: React.FC<IChildren> = ({ children }) => {
  return <RequireNoAuth>{children}</RequireNoAuth>;
};

export default LoginLayout;
