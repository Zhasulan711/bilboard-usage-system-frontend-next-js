import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const ChecksIcon: FC<
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
        d="M16.3327 9.33325H9.33268M18.666 13.9999H9.33268M15.166 18.6666H9.33268M4.66602 2.33325V25.6666L6.99935 24.4999L9.33268 25.6666L11.666 24.4999L13.9993 25.6666L16.3327 24.4999L18.666 25.6666L20.9993 24.4999L23.3327 25.6666V2.33325L20.9993 3.49992L18.666 2.33325L16.3327 3.49992L13.9993 2.33325L11.666 3.49992L9.33268 2.33325L6.99935 3.49992L4.66602 2.33325Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
