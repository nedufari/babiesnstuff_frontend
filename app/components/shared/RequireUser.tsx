"use client";

import { IChildren } from "@/app/types";
import useAuth from "@/app/utils/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const RequireStudent: React.FC<IChildren> = ({ children }) => {
  const router = useRouter();

  const { isUser } = useAuth();

  useEffect(() => {
    if (!isUser) {
      router.push("/");
    }
  }, [isUser, router]);

  if (!isUser) {
    return null;
  }

  return <>{children}</>;
};

export default RequireStudent;
