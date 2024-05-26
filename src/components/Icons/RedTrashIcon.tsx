import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

interface RedTrashIconProps extends DefaultIconComponentProps {
  onClick: () => void;
}

export const RedTrashIcon: FC<RedTrashIconProps> = ({
  width = 28,
  height = 28,
  onClick,
}) => {
  const viewBox = `0 0 ${width} ${height}`;
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer redTrash-icon"
      onClick={onClick}
    >
      <path
        d="M3.5 7H24.5"
        stroke="#D6343C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.1673 7V23.3333C22.1673 24.5 21.0007 25.6667 19.834 25.6667H8.16732C7.00065 25.6667 5.83398 24.5 5.83398 23.3333V7"
        stroke="#D6343C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.33398 6.99992V4.66659C9.33398 3.49992 10.5007 2.33325 11.6673 2.33325H16.334C17.5007 2.33325 18.6673 3.49992 18.6673 4.66659V6.99992"
        stroke="#D6343C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.666 12.8333V19.8333"
        stroke="#D6343C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.334 12.8333V19.8333"
        stroke="#D6343C"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
