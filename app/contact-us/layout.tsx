import React from "react";
import { IChildren } from "../types";
import Header from "../components/shared/Header";

const ContactUsLayout: React.FC<IChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ContactUsLayout;
