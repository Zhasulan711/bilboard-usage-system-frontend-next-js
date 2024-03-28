import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const MessagesIcon: FC<
  DefaultIconComponentProps & { stroke?: string }
> = ({ width = 28, height = 28, stroke = "currentColor" }) => {
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
        d="M16.3334 10.4999C16.3334 11.1188 16.0875 11.7122 15.65 12.1498C15.2124 12.5874 14.6189 12.8333 14 12.8333H7.00004L2.33337 17.4999V4.66659C2.33337 3.38325 3.38337 2.33325 4.66671 2.33325H14C14.6189 2.33325 15.2124 2.57908 15.65 3.01667C16.0875 3.45425 16.3334 4.04775 16.3334 4.66659V10.4999Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 10.5H23.3333C23.9521 10.5 24.5456 10.7458 24.9832 11.1834C25.4208 11.621 25.6666 12.2145 25.6666 12.8333V25.6667L21 21H14C13.3811 21 12.7876 20.7542 12.35 20.3166C11.9125 19.879 11.6666 19.2855 11.6666 18.6667V17.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
