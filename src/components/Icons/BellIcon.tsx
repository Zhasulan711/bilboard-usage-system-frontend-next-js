import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const BellIcon: FC<DefaultIconComponentProps> = ({
  width = 32,
  height = 32,
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
        d="M8 10.6667C8 8.54502 8.84286 6.51018 10.3431 5.00989C11.8434 3.5096 13.8783 2.66675 16 2.66675C18.1217 2.66675 20.1566 3.5096 21.6569 5.00989C23.1571 6.51018 24 8.54502 24 10.6667C24 20.0001 28 22.6667 28 22.6667H4C4 22.6667 8 20.0001 8 10.6667Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.7334 28C13.9566 28.4059 14.2847 28.7445 14.6834 28.9803C15.0821 29.216 15.5368 29.3404 16.0001 29.3404C16.4633 29.3404 16.918 29.216 17.3167 28.9803C17.7155 28.7445 18.0436 28.4059 18.2667 28"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
