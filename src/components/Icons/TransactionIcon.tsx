import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const TransactionIcon: FC<DefaultIconComponentProps & {stroke?:string}> = ({
  width = 28,
  height = 28,
  stroke= "currentColor"
}) => {
  const viewBox = `0 0 ${width} ${height}`;
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-all duration-2000 ease-in-out navBars-icon"
      style={{ color: stroke }}
    >
      <path
        d="M18.6666 3.5L23.3333 8.16667L18.6666 12.8333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.3333 8.16675H4.66663"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33329 24.5001L4.66663 19.8334L9.33329 15.1667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66663 19.8333H23.3333"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
