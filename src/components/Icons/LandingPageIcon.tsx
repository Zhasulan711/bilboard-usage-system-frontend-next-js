import { FC, MouseEventHandler } from "react";
import { DefaultIconComponentProps } from "./types";

interface LandingPageIconProps extends DefaultIconComponentProps {
  isClicked?: MouseEventHandler<SVGElement>; // Add this line
}

export const LandingPageIcon: FC<
  LandingPageIconProps & { strokeColor: string }
> = ({ width = 28, height = 28, isClicked, strokeColor = "white" }) => {
  const viewBox = `0 0 ${width} ${height}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={isClicked}
    >
      <path
        d="M2.33398 3.5H25.6673"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 3.5V16.3333C24.5 16.9522 24.2542 17.5457 23.8166 17.9832C23.379 18.4208 22.7855 18.6667 22.1667 18.6667H5.83333C5.21449 18.6667 4.621 18.4208 4.18342 17.9832C3.74583 17.5457 3.5 16.9522 3.5 16.3333V3.5"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.16602 24.5003L13.9993 18.667L19.8327 24.5003"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
