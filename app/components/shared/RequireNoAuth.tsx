"use client";

import { IChildren } from "@/app/types";
import React, { useEffect } from "react";
import useAuth from "@/app/utils/hooks/useAuth";
import { useRouter } from "next/navigation";

const RequireNoAuth: React.FC<IChildren> = ({ children }) => {
  const router = useRouter();
  const { isAdmin, isSuperAdmin, isUser } = useAuth();

  useEffect(() => {
    if (isSuperAdmin || isAdmin || isUser) {
      router.push("/");
    }
  }, [isSuperAdmin, isAdmin, isUser, router]);

  if (isSuperAdmin || isAdmin || isUser) {
    return null;
  }

  return <>{children}</>;
};

export default RequireNoAuth;
