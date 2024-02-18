import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const TengeSmallCurrencyIcon: FC<DefaultIconComponentProps> = ({
  width = 10,
  height = 13,
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
        d="M0 0H10V1.44444H0V0ZM0 2.16667H10V3.61111H5.71429V13H4.28571V3.61111H0V2.16667Z"
        fill="#FFB13D"
        fillOpacity="0.8"
      />
    </svg>
  );
};
