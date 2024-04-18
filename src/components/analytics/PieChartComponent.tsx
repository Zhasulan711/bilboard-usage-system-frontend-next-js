"use client";

import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export const PieChartComponent = ({ data }: any) => {
  // Define the colors for each section of the pie chart
  const COLORS = [
    "#d46a6e",
    "#fad577",
    "#f9fc74",
    "#89d563",
    "#71a2d6",
    "#857efd",
    "#dd55d7",
    "#63dec7",
  ];

  return (
    <div className="flex justify-center items-center">
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={145}
          cy={145}
          outerRadius={115}
          fill="#8884d8"
          label
        >
          {data.map((entry: any, index: any) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};
