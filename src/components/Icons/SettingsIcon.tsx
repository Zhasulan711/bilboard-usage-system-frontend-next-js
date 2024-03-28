import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const SettingsIcon: FC<
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
        d="M24.5 18.6666V9.3333C24.4996 8.92412 24.3916 8.52225 24.1868 8.16799C23.982 7.81373 23.6877 7.51956 23.3333 7.31497L15.1667 2.6483C14.812 2.44351 14.4096 2.33569 14 2.33569C13.5904 2.33569 13.188 2.44351 12.8333 2.6483L4.66667 7.31497C4.31231 7.51956 4.01798 7.81373 3.81321 8.16799C3.60843 8.52225 3.50042 8.92412 3.5 9.3333V18.6666C3.50042 19.0758 3.60843 19.4777 3.81321 19.8319C4.01798 20.1862 4.31231 20.4804 4.66667 20.685L12.8333 25.3516C13.188 25.5564 13.5904 25.6642 14 25.6642C14.4096 25.6642 14.812 25.5564 15.1667 25.3516L23.3333 20.685C23.6877 20.4804 23.982 20.1862 24.1868 19.8319C24.3916 19.4777 24.4996 19.0758 24.5 18.6666Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 18.6666C16.5774 18.6666 18.6667 16.5772 18.6667 13.9999C18.6667 11.4226 16.5774 9.33325 14 9.33325C11.4227 9.33325 9.33337 11.4226 9.33337 13.9999C9.33337 16.5772 11.4227 18.6666 14 18.6666Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
