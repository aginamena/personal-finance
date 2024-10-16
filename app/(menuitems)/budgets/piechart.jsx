 "use client";
// import { PieChart } from "react-minimal-pie-chart";

// export default function PieChartCmp() {
//   return (
//     <PieChart
//       data={[
//         { title: "Entertainment", value: 50, color: "#277C78" },
//         { title: "Bills", value: 50, color: "#82C9D7" },
//         { title: "Dinning Out", value: 50, color: "#F2CDAC" },
//         { title: "Personal Care", value: 50, color: "#626070" },
//       ]}
//     />
//   );
// }

import { PieChart } from '@mui/x-charts/PieChart';

export default function PieChartCmp() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}