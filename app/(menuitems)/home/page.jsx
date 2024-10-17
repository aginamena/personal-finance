import { Box, Container } from "@mui/material";
import BudgetSummary from "../budgets/summary";
import PotSummary from "../pots/summary";
import RecurringBillsSummary from "../recurring-bills/summary";
import TransactionSummary from "../transactions/summary";
import Balance from "./Balance";

export default function Home() {
  return (
    <Container>
      <Box sx={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
        Overview
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
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
