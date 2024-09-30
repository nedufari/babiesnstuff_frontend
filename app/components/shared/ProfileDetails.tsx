"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { SvgIcon } from "@mui/material";
import { profileIcon } from "@/app/utils/icons";
import useAuth from "@/app/utils/hooks/useAuth";
import { useDispatch } from "react-redux";
import { logOut } from "@/app/store/Features/auth/authSlice";
import { useRouter } from "next/navigation";

export default function ProfileDetails() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    dispatch(logOut({}));
    setAnchorEl(null);
  };

  const handleLogin = () => {
    router.push("/login");
    setAnchorEl(null);
  };

  const handleSignUp = () => {
    router.push("/sign-up");
    setAnchorEl(null);
  };

  const { isUser, fullname } = useAuth();
  return (
    <>
      <Tooltip title="Account settings" arrow>
        <IconButton
          onClick={handleClick}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <SvgIcon
            sx={{
              width: "17px",
              height: "15px",
            }}
          >
            {profileIcon()}
          </SvgIcon>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {isUser && <MenuItem>Welcome {fullname}</MenuItem>}
        {isUser && (
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        )}
        {isUser || (
          <MenuItem onClick={handleLogin}>
            <Avatar /> Login
          </MenuItem>
        )}

        {isUser || (
          <MenuItem onClick={handleSignUp}>
            <Avatar /> Sign Up
          </MenuItem>
        )}
      </Menu>
    </>
  );
}
