import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const ArrowRightIcon: FC<DefaultIconComponentProps> = ({
  width = 29,
  height = 29,
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
        d="M6.04199 14.5H22.9587"
        stroke="#FF9800"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 6.0415L22.9583 14.4998L14.5 22.9582"
        stroke="#FF9800"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
