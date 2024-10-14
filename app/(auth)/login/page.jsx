import { Box, TextField, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Login() {
  return (
    <Box
      sx={{
        width: "400px",
        backgroundColor: "white",
        height: "350px",
        margin: "40px",
      }}
    >
      <Box component="form" sx={{ width: "90%", margin: "20px" }}>
        <Typography
          sx={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          sx={{ marginBottom: "20px", width: "100%" }}
        />

        <TextField label="Password" type="password" sx={{ width: "100%" }} />
        <Button
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "#201F24",
            height: "53px",
            marginTop: "20px",
          }}
        >
          <Typography sx={{ fontSize: "14px" }}>Login</Typography>
        </Button>
        <Typography
          style={{ marginTop: "20px", textAlign: "center", fontSize: "14px" }}
        >
          Need to create an account?{" "}
          <b>
            <Link href="/sign-up" style={{ color: "black" }}>
              Sign Up
            </Link>
          </b>
        </Typography>
      </Box>
    </Box>
  );
}
