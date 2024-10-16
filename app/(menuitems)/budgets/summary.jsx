import { Typography, Box } from "@mui/material";
import Image from "next/image";
import RightArrow from "@/public/assets/images/icon-caret-right.svg";
import { PieChart } from "react-minimal-pie-chart";
import PieChartCmp from "./piechart";

export default function BudgetSummary() {
  return (
    <Box sx={{ bgcolor: "white", padding: "30px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <Typography sx={{ fontSize: "20px" }}>Budgets</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ marginRight: "10px", fontSize: "13px" }}>
            See Detais
          </Typography>
          <Image src={RightArrow} alt="right arrow" />
        </Box>
      </Box>
      <Box>
        <PieChartCmp />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <Box>
            <Typography sx={{ fontSize: "13px" }}>Entertainment</Typography>
            <Typography sx={{ fontWeight: "bold" }}>$50</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "13px" }}>Bills</Typography>
            <Typography sx={{ fontWeight: "bold" }}>$50</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "13px" }}>Dinning Out</Typography>
            <Typography sx={{ fontWeight: "bold" }}> $50</Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: "13px" }}>Personal Care</Typography>
            <Typography sx={{ fontWeight: "bold" }}>$50</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
