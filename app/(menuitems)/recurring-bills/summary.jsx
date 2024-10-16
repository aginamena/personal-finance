import { Typography, Box } from "@mui/material";
import Image from "next/image";

export default function RecurringBillsSummary() {
  return (
    <Box sx={{ bgcolor: "white", padding: "30px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <Typography sx={{ fontSize: "20px" }}>Recurring Bills</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ marginRight: "10px", fontSize: "13px" }}>
            See Detais
          </Typography>
          <Image
            src="/assets/images/icon-caret-right.svg"
            alt="right arrow"
            width={15}
            height={15}
          />
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            bgcolor: "#F2F2F2",
            justifyContent: "space-between",
            padding: "0 10px",
            height: "50px",
          }}
        >
          <Typography>Paid Bills</Typography>
          <Typography sx={{ fontWeight: "bold" }}>$190.00</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "30px",
            marginBottom: "30px",
            bgcolor: "#F2F2F2",
            height: "50px",
            padding: "0 10px",
          }}
        >
          <Typography>Total Upcoming</Typography>
          <Typography sx={{ fontWeight: "bold" }}>$194.98</Typography>
        </Box>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            padding: "0 10px",
            height: "50px",
            justifyContent: "space-between",
            bgcolor: "#F2F2F2",
          }}
        >
          <Typography>Due Soon</Typography>
          <Typography sx={{ fontWeight: "bold" }}>$59.98</Typography>
        </Box>
      </Box>
    </Box>
  );
}
