import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const LandingPageHorizontalIcon: FC<DefaultIconComponentProps> = ({
  width = 1690,
  height = 781,
}) => {
  const viewBox = `0 0 ${width} ${height}`;
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute z-20 top-[150px] right-[30px]"
    >
      <g opacity="0.3">
        <line
          x1="-38"
          y1="1.5"
          x2="1690"
          y2="1.5"
          stroke="white"
          strokeWidth="3"
        />
        <line
          x1="-38"
          y1="390.5"
          x2="1690"
          y2="390.5"
          stroke="white"
          strokeWidth="3"
        />
        <line
          x1="-38"
          y1="779.5"
          x2="1690"
          y2="779.5"
          stroke="white"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};
