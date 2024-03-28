import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const DashboardIcon: FC<
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
        d="M10.5 3.5H4.66667C4.02233 3.5 3.5 4.02233 3.5 4.66667V12.8333C3.5 13.4777 4.02233 14 4.66667 14H10.5C11.1443 14 11.6667 13.4777 11.6667 12.8333V4.66667C11.6667 4.02233 11.1443 3.5 10.5 3.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.3334 3.5H17.5C16.8557 3.5 16.3334 4.02233 16.3334 4.66667V8.16667C16.3334 8.811 16.8557 9.33333 17.5 9.33333H23.3334C23.9777 9.33333 24.5 8.811 24.5 8.16667V4.66667C24.5 4.02233 23.9777 3.5 23.3334 3.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.3334 14H17.5C16.8557 14 16.3334 14.5223 16.3334 15.1667V23.3333C16.3334 23.9777 16.8557 24.5 17.5 24.5H23.3334C23.9777 24.5 24.5 23.9777 24.5 23.3333V15.1667C24.5 14.5223 23.9777 14 23.3334 14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 18.6667H4.66667C4.02233 18.6667 3.5 19.1891 3.5 19.8334V23.3334C3.5 23.9777 4.02233 24.5001 4.66667 24.5001H10.5C11.1443 24.5001 11.6667 23.9777 11.6667 23.3334V19.8334C11.6667 19.1891 11.1443 18.6667 10.5 18.6667Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
