"use client";

import React, { useEffect } from "react";
import useAuth from "@/app/utils/hooks/useAuth";
import { useRouter } from "next/navigation";
import { IChildren } from "@/app/types";

const RequireAdmin: React.FC<IChildren> = ({ children }) => {
  const router = useRouter();

  const { isAdmin, isSuperAdmin } = useAuth();

  useEffect(() => {
    if (!(isSuperAdmin || isAdmin)) {
      router.push("/admin/login");
    }
  }, [isSuperAdmin, isAdmin, router]);

  if (!(isSuperAdmin || isAdmin)) {
    return null;
  }

  return <>{children}</>;
};

export default RequireAdmin;
