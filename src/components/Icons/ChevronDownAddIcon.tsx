import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const ChevronDownAddIcon: FC<DefaultIconComponentProps> = ({
  width = 24,
  height = 24,
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
        d="M6 9L12 15L18 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
