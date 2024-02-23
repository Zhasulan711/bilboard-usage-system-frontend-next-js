import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const ChevronDownParametersIcon: FC<DefaultIconComponentProps> = ({
  width = 28,
  height = 28,
}) => {
  const viewBox = `0 0 ${width} ${height}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 10.5L14 17.5L21 10.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
