"use client";

import React, { useState, useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useRouter, usePathname } from "next/navigation";

export default function Nav({ bg = "none" }) {
  const [value, setValue] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/":
        setValue(0);
        break;
      case "/shop":
        setValue(1);
        break;
      case "/videos":
        setValue(2);
        break;
      case "/contact-us":
        setValue(3);
        break;
      // default:
      //   setValue(0);
      //   break;
    }
  }, [pathname]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    switch (newValue) {
      case 0:
        router.push("/");
        break;
      case 1:
        router.push("/shop");
        break;
      case 2:
        router.push("/videos");
        break;
      case 3:
        router.push("/contact-us");
        break;
      // default:
      //   router.push("/");
      //   break;
    }
  };

  return (
    <Box
      sx={{
        width: "462px",
        position: "relative",
        borderRadius: "8px",
        overflow: "hidden",
        height: "57px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: "1px solid transparent",
          borderRadius: "inherit",
          background: "linear-gradient(to right, #397F98, #FFA013) border-box",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        },
        marginBottom: "3rem",
        backgroundColor: bg,
        "& > .MuiTabs-indicator ": {
          backgroundColor: "unset",
        },
      }}
    >
      <Tabs
        onChange={handleChange}
        value={value}
        aria-label="Tabs where selection follows focus"
        centered
        sx={{
          ".Mui-selected": {
            color: "#FFF !important",
            borderRadius: "6px",
            height: "80%",
            backgroundColor: "secondary.main",
          },
          "& .MuiTabs-indicator": {
            display: "none",
          },
        }}
        indicatorColor="secondary"
      >
        <Tab
          label="Home"
          sx={{
            textTransform: "capitalize",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "18px",
            color: "#000",
            fontFamily: `'__Inter_611e81','__Inter_Fallback_611e81'`,
          }}
        />
        <Tab
          label="Shop"
          sx={{
            textTransform: "capitalize",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "18px",
            color: "#000",
            fontFamily: `'__Inter_611e81','__Inter_Fallback_611e81'`,
          }}
        />
        <Tab
          label="Videos"
          sx={{
            textTransform: "capitalize",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "18px",
            color: "#000",
            fontFamily: `'__Inter_611e81','__Inter_Fallback_611e81'`,
          }}
        />
        <Tab
          label="Contact Us"
          sx={{
            textTransform: "capitalize",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: "18px",
            color: "#000",
            fontFamily: `'__Inter_611e81','__Inter_Fallback_611e81'`,
          }}
        />
      </Tabs>
    </Box>
  );
}
