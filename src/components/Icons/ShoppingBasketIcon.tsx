import { FC, MouseEventHandler } from "react";
import { DefaultIconComponentProps } from "./types";

interface ShoppingBasketIconProps extends DefaultIconComponentProps {
  onClick?: MouseEventHandler<SVGElement>;
}

export const ShoppingBasketIcon: FC<
  ShoppingBasketIconProps & { strokeColor: string }
> = ({ width = 32, height = 32, onClick, strokeColor = "white" }) => {
  const viewBox = `0 0 ${width} ${height}`;
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className="cursor-pointer navBars-icon"
    >
      <path
        d="M19.9993 14.6667L18.666 26.6667"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.3333 14.6666L20 5.33325"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.66602 14.6667H29.3327"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.66602 14.6667L6.79935 24.5334C6.92402 25.1448 7.25915 25.6931 7.7464 26.0829C8.23364 26.4727 8.84216 26.6793 9.46602 26.6667H22.5327C23.1565 26.6793 23.7651 26.4727 24.2523 26.0829C24.7396 25.6931 25.0747 25.1448 25.1993 24.5334L27.466 14.6667"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 20.6667H26"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66602 14.6666L11.9993 5.33325"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 14.6667L13.3333 26.6667"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
