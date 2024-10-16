// "use client";
import { Container, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// import { styled } from "@mui/material/styles";
import Balance from "./Balance";
import GridItems from "./GridItems";
import PotSummary from "../pots/summary";
import BudgetSummary from "../budgets/summary";
import TransactionSummary from "../transactions/summary";
import RecurringBillsSummary from "../recurring-bills/summary";

export default function Home() {
  return (
    <Container>
      <Box sx={{ fontSize: "32px", fontWeight: "bold" }}>Overview</Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Balance name="Current Balance" amount={4836.0} />
        <Balance name="Income" amount={4836.0} />
        <Balance name="Expenses" amount={4836.0} />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: "600px" }}>
          <Box sx={{ marginBottom: "30px" }}>
            <PotSummary />
          </Box>

          <TransactionSummary />
        </Box>
        <Box sx={{ width: "475px" }}>
          <Box sx={{ marginBottom: "30px" }}>
            <BudgetSummary />
          </Box>

          <RecurringBillsSummary />
        </Box>
      </Box>
    </Container>
  );
}
