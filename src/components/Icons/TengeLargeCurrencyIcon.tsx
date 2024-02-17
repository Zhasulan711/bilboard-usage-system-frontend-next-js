import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const TengeLargeCurrencyIcon: FC<DefaultIconComponentProps> = ({
  width = 24,
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
        d="M0 0H24V3.55556H0V0ZM0 5.33333H24V8.88889H13.7143V32H10.2857V8.88889H0V5.33333Z"
        fill="#FFB13D"
      />
    </svg>
  );
};
