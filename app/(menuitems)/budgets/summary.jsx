import RightArrow from "@/public/assets/images/icon-caret-right.svg";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
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
      </Box>
    </Box>
  );
}
