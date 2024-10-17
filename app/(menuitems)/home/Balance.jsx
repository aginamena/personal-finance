import { Box, Typography } from "@mui/material";

export default function Balance({ name, amount }) {
  return (
    <Box
      sx={{
        width: "330px",
        bgcolor: "white",
        borderRadius: "12px",
        height: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Typography sx={{ fontSize: "13px" }}>{name}</Typography>
      <Typography sx={{ fontWeight: "bold", fontSize: "32px" }}>
        ${amount}
      </Typography>
    </Box>
  );
}
