import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const ChevronDownCalendarIcon: FC<DefaultIconComponentProps> = ({
  width = 18,
  height = 18,
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
        d="M4.5 6.75L9 11.25L13.5 6.75"
        stroke="white"
        strokeOpacity="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
