import LargeLogo from "@/public/assets/images/logo-large.svg";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";

export default function Layout({ children }) {
  const drawerWidth = 240;
  const menuItems = [
    {
      name: "Overview",
      imageUrl: (
        <Image
          src="/assets/images/icon-overview.svg"
          width={50}
          height={50}
          alt="overview"
        />
      ),
    },
    {
      name: "Transactions",
      imageUrl: (
        <Image
          src="/assets/images/icon-transactions.svg"
          width={50}
          height={50}
          alt="Transactions"
        />
      ),
    },
    {
      name: "Pots",
      imageUrl: (
        <Image
          src="/assets/images/icon-pots.svg"
          width={50}
          height={50}
          alt="Pots"
        />
      ),
    },
    {
      name: "Budgets",
      imageUrl: (
        <Image
          src="/assets/images/icon-budgets.svg"
          width={50}
          height={50}
          alt="Budgets"
        />
      ),
    },
    {
      name: "Recurring Bills",
      imageUrl: (
        <Image
          src="/assets/images/icon-recurring-bills.svg"
          alt="Recurring Bills"
          width={50}
          height={50}
        />
      ),
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>
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
              <Image
                src="/assets/images/icon-minimize-menu.svg"
                alt="MinimizeMenu"
                width={50}
                height={50}
              />
              ,
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
