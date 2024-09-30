import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { ILineChartColor } from "@/app/types";

const TheLineChart: React.FC<ILineChartColor> = ({ color1, color2 }) => {
  return (
    <LineChart
      sx={{
        width: "100%",
        height: "100%",
      }}
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
          area: true,
        },
      ]}
      yAxis={[
        {
          colorMap: {
            type: "continuous",
            min: -10,
            max: 10,
            color: [color1, color2],
          },
        },
      ]}
    />
  );
};

export default TheLineChart;
