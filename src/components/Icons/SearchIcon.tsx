import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export interface SearchIconProps extends DefaultIconComponentProps {
  handleSVGClick?: () => void;
  fill?: string;
}

export const SearchIcon: FC<SearchIconProps> = ({
  handleSVGClick,
  width = "24",
  height = "24",
}) => {
  const SVGProps: Record<string, any> = {};
  if (handleSVGClick) {
    SVGProps.onClick = handleSVGClick;
  }

  const viewBox = `0 0 ${width} ${height}`;
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...SVGProps}
    >
      <path
        className="hover:stroke-[#6E7581]"
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="hover:stroke-[#6E7581]"
        d="M21 21L16.7 16.7"
        stroke="white"
        strokeOpacity="0.5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
