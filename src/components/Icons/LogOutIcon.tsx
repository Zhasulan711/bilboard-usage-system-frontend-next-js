import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const LogOutIcon: FC<DefaultIconComponentProps> = ({
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
        d="M10.5 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V5.83333C3.5 5.21449 3.74583 4.621 4.18342 4.18342C4.621 3.74583 5.21449 3.5 5.83333 3.5H10.5"
        stroke="#D6343C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.667 19.8334L24.5003 14.0001L18.667 8.16675"
        stroke="#D6343C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 14H10.5"
        stroke="#D6343C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
