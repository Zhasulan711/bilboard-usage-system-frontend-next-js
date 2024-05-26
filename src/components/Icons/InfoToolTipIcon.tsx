import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

interface InfoToolTipIconProps extends DefaultIconComponentProps {
  toggleVisibility: () => void;
}

export const InfoToolTipIcon: FC<
  InfoToolTipIconProps & { strokeColor: string }
> = ({ width = 32, height = 32, toggleVisibility, strokeColor = "white" }) => {
  const viewBox = `0 0 ${width} ${height}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggleVisibility}
      className="cursor-pointer navBars-icon"
    >
      <path
        d="M16.0003 29.3332C23.3641 29.3332 29.3337 23.3636 29.3337 15.9998C29.3337 8.63604 23.3641 2.6665 16.0003 2.6665C8.63653 2.6665 2.66699 8.63604 2.66699 15.9998C2.66699 23.3636 8.63653 29.3332 16.0003 29.3332Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 21.3333V16"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 10.6665H16.0133"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
