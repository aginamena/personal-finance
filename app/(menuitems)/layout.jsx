import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LargeLogo from "@/public/assets/images/logo-large.svg";
import Image from "next/image";

import Overview from "@/public/assets/images/icon-nav-overview.svg";
import Transactions from "@/public/assets/images/icon-nav-transactions.svg";
import Pots from "@/public/assets/images/icon-nav-pots.svg";
import RecurringBills from "@/public/assets/images/icon-nav-recurring-bills.svg";
import Budgets from "@/public/assets/images/icon-nav-budgets.svg";
import MinimizeMenu from "@/public/assets/images/icon-minimize-menu.svg";

export default function Layout({ children }) {
  const drawerWidth = 240;
  const menuItems = [
    {
      name: "Overview",
      imageUrl: <Image src={Overview} alt="overview" />,
    },
    {
      name: "Transactions",
      imageUrl: <Image src={Transactions} alt="Transactions" />,
    },
    {
      name: "Pots",
      imageUrl: <Image src={Pots} alt="Pots" />,
    },
    {
      name: "Budgets",
      imageUrl: <Image src={Budgets} alt="Budgets" />,
    },
    {
      name: "Recurring Bills",
      imageUrl: <Image src={RecurringBills} alt="Recurring Bills" />,
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#201F24",
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box
          sx={{
            height: "100px",
            display: "flex",
            padding: "16px",
            alignItems: "center",
          }}
        >
          <Image src={LargeLogo} alt="app logo" />
        </Box>
        <Divider sx={{ backgroundColor: "white" }} />
        <List sx={{ color: "white", height: "800px" }}>
          {menuItems.map(({ name, imageUrl }) => (
            <ListItem key={name} disablePadding>
              <ListItemButton>
                {imageUrl}
                <ListItemText primary={name} sx={{ paddingLeft: "20px" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ backgroundColor: "white" }} />
        <List sx={{ height: "100px" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <Image src={MinimizeMenu} alt="MinimizeMenu" />,
              <ListItemText
                primary="Minimize menu"
                sx={{ paddingLeft: "20px", color: "white" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "#F8F4F0", p: 3 }}>
        {/* <Toolbar /> */}
        {children}
      </Box>
    </Box>
  );
}
