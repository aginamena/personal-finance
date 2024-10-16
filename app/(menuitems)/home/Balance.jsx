import { Box, Typography } from "@mui/material";

export default function Balance({ name, amount }) {
  return (
    <Box
      sx={{
        width: "330px",
        bgcolor: "white",
        borderRadius: "12px",
        height: "100px",
      }}
    >
      <Typography>{name}</Typography>
      <Typography>${amount}</Typography>
    </Box>
  );
}
