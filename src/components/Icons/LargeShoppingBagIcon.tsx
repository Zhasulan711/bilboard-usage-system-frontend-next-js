import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const LargeShoppingBagIcon: FC<DefaultIconComponentProps> = ({
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
        d="M8 2.66675L4 8.00008V26.6667C4 27.374 4.28095 28.0523 4.78105 28.5524C5.28115 29.0525 5.95942 29.3334 6.66667 29.3334H25.3333C26.0406 29.3334 26.7189 29.0525 27.219 28.5524C27.719 28.0523 28 27.374 28 26.6667V8.00008L24 2.66675H8Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 8H28"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3327 13.3333C21.3327 14.7477 20.7708 16.1043 19.7706 17.1045C18.7704 18.1047 17.4138 18.6666 15.9993 18.6666C14.5849 18.6666 13.2283 18.1047 12.2281 17.1045C11.2279 16.1043 10.666 14.7477 10.666 13.3333"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
