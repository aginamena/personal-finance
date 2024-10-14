import { Box, Typography } from "@mui/material";
import Image from "next/image";
import AuthenticationSVG from "@/public/assets/images/illustration-authentication.svg";
import LargeLogo from "@/public/assets/images/logo-large.svg";

export default function Layout({ children }) {
  return (
    <Box sx={{ height: { xs: "100vh", lg: "auto" } }}>
      <Box
        sx={{
          backgroundColor: "#201F24",
          height: "100px",
          display: { xs: "flex", lg: "none" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={LargeLogo} />
      </Box>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#F8F4F0",
          justifyContent: { xs: "center", lg: "unset" },
          alignItems: { xs: "center", lg: "unset" },
        }}
      >
        <Box
          sx={{
            position: "relative",
            margin: "40px",
            display: { xs: "none", lg: "block" },
          }}
        >
          <Image
            src={LargeLogo}
            style={{ position: "absolute", top: 90, left: 30 }}
          />
          <Image
            src={AuthenticationSVG}
            style={{
              borderRadius: "12px",
            }}
          />
          <Box
            sx={{
              width: "480px",
              position: "absolute",
              bottom: "10%",
              left: "5%",
              transform: "translate(5px, 10px)",
              color: "white",
            }}
          >
            <Typography
              sx={{
                fontSize: "32px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Keep track of your money and save for your future
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </Typography>
          </Box>
        </Box>

        {children}
      </Box>
    </Box>
  );
}
