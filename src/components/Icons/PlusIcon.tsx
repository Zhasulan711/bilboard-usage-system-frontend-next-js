import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const PlusIcon: FC<
  DefaultIconComponentProps & { strokeColor: string }
> = ({ width = 30, height = 30, strokeColor = "white" }) => {
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
        d="M6.25 15H23.75"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 6.25V23.75"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
