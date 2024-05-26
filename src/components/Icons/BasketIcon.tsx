import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const BasketIcon: FC<
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
        d="M7 2.33325L3.5 6.99992V23.3333C3.5 23.9521 3.74583 24.5456 4.18342 24.9832C4.621 25.4208 5.21449 25.6666 5.83333 25.6666H22.1667C22.7855 25.6666 23.379 25.4208 23.8166 24.9832C24.2542 24.5456 24.5 23.9521 24.5 23.3333V6.99992L21 2.33325H7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.5 7H24.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6673 11.6667C18.6673 12.9044 18.1757 14.0914 17.3005 14.9666C16.4253 15.8417 15.2383 16.3334 14.0007 16.3334C12.763 16.3334 11.576 15.8417 10.7008 14.9666C9.82565 14.0914 9.33398 12.9044 9.33398 11.6667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
