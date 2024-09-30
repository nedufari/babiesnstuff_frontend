import AdminLayout from "@/app/components/shared/AdminLayout";
import RequireAdmin from "@/app/components/shared/RequireAdmin";
import { IChildren } from "@/app/types";
import React from "react";

const DashboardLayout: React.FC<IChildren> = ({ children }) => {
  return (
    <RequireAdmin>
      <AdminLayout>{children}</AdminLayout>
    </RequireAdmin>
  );
};

export default DashboardLayout;
