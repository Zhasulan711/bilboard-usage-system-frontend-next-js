import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const AnalyticsIcon: FC<
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
      className="transition-all duration-1000 ease-in-out navBars-icon"
      style={{ color: stroke }}
    >
      <path
        d="M3.5 3.5V24.5H24.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6666 11.6667H9.33329C8.68896 11.6667 8.16663 12.1891 8.16663 12.8334V18.6667C8.16663 19.3111 8.68896 19.8334 9.33329 19.8334H11.6666C12.311 19.8334 12.8333 19.3111 12.8333 18.6667V12.8334C12.8333 12.1891 12.311 11.6667 11.6666 11.6667Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 5.83325H18.6667C18.0223 5.83325 17.5 6.35559 17.5 6.99992V18.6666C17.5 19.3109 18.0223 19.8333 18.6667 19.8333H21C21.6443 19.8333 22.1667 19.3109 22.1667 18.6666V6.99992C22.1667 6.35559 21.6443 5.83325 21 5.83325Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
