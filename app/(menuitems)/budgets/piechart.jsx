"use client";

import { PieChart } from "@mui/x-charts/PieChart";

export default function PieChartCmp() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 50, label: "Entertainment" },
            { id: 1, value: 50, label: "Bills" },
            { id: 2, value: 50, label: "Dinning Out" },
            { id: 2, value: 50, label: "Personal Care" },
          ],
        },
      ]}
      colors={["#277C78", "#82C9D7", "#F2CDAC", "#626070"]}
      width={400}
      height={200}
    />
  );
}
