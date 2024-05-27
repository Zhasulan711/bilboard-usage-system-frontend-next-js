"use client";

import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = [
  "#d46a6e", // alatau
  "#fad577", // almalinsk
  "#f9fc74", // auezov
  "#89d563", // bostandyk
  "#71a2d6", // medeu
  "#857efd", // nauryzbay
  "#dd55d7", // turksib
  "#63dec7", // zhetysu
];

export const PieChartComponent = ({ data }: any) => {
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
        {/* <Legend /> */}
      </PieChart>
    </div>
  );
};
