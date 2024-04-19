import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const LandingPageVerticalIcon: FC<DefaultIconComponentProps> = ({
  width = 1728,
  height = 1117,
}) => {
  const viewBox = `0 0 ${width} ${height}`;
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute z-20 -left-[10px]"
    >
      <line
        x1="1.5"
        y1="-6.55671e-08"
        x2="1.50005"
        y2="1117"
        stroke="white"
        strokeOpacity="0.3"
        strokeWidth="3"
      />
      <line
        x1="446.5"
        y1="-6.55671e-08"
        x2="446.5"
        y2="1117"
        stroke="white"
        strokeOpacity="0.3"
        strokeWidth="3"
      />
      <line
        x1="891.5"
        y1="-6.55671e-08"
        x2="891.5"
        y2="1117"
        stroke="white"
        strokeOpacity="0.3"
        strokeWidth="3"
      />
      <line
        x1="1336.5"
        y1="-6.55671e-08"
        x2="1336.5"
        y2="1117"
        stroke="white"
        strokeOpacity="0.3"
        strokeWidth="3"
      />
    </svg>
  );
};
