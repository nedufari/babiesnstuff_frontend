import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IMobileNav } from "@/app/types";
import { homeNavItems } from "@/app/utils/data";
import Link from "next/link";
import { SvgIcon } from "@mui/material";

const MobileNav: React.FC<IMobileNav> = ({ open, setOpen, toggleDrawer }) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {homeNavItems.map((item, index) => (
          <ListItem
            key={index}
            disablePadding
            sx={{
              "&  a": {
                textDecoration: "none",
                color: "#3C3C3C",
              },
            }}
          >
            <Link href={item.link}>
              <ListItemButton>
                <ListItemIcon>
                  <SvgIcon
                    sx={{
                      width: "17px",
                      height: "15px",
                    }}
                  >
                    {item.icon}
                  </SvgIcon>
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default MobileNav;
