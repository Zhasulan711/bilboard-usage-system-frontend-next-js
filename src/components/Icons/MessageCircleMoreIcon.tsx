import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const MessageCircleMoreIcon: FC<DefaultIconComponentProps> = ({
  width = 32,
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
        d="M10.5334 26.6666C13.0782 27.9721 16.0055 28.3256 18.7879 27.6637C21.5703 27.0017 24.0248 25.3678 25.7091 23.0562C27.3934 20.7447 28.1966 17.9076 27.9742 15.0562C27.7517 12.2048 26.5182 9.52661 24.4958 7.50424C22.4735 5.48187 19.7953 4.24832 16.9439 4.02587C14.0925 3.80342 11.2554 4.60671 8.94384 6.29098C6.63231 7.97524 4.99834 10.4297 4.33638 13.2121C3.67442 15.9945 4.028 18.9219 5.33341 21.4666L2.66675 29.3333L10.5334 26.6666Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.6667 16H10.6792"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 16H16.0125"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3333 16H21.3458"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
