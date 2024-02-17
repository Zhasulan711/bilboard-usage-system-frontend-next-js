import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const NightModeIcon: FC<DefaultIconComponentProps> = ({
  width = 28,
  height = 28,
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
        d="M14 17.5C15.933 17.5 17.5 15.933 17.5 14C17.5 12.067 15.933 10.5 14 10.5C12.067 10.5 10.5 12.067 10.5 14C10.5 15.933 12.067 17.5 14 17.5Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1333 25.55C14.3765 25.9186 16.6786 25.6238 18.7565 24.7018C20.8344 23.7799 22.5978 22.2709 23.8298 20.3604C25.0618 18.4499 25.7087 16.221 25.6912 13.9478C25.6737 11.6746 24.9924 9.456 23.7311 7.5647"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 2.44999C13.5159 2.10883 11.2309 2.42388 9.17252 3.35684C7.11413 4.2898 5.37103 5.80052 4.15501 7.70542C2.93899 9.61033 2.3024 11.8274 2.32261 14.0873C2.34282 16.3471 3.01894 18.5525 4.26883 20.4353"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.1693 8.16667C23.4579 8.16667 24.5026 7.122 24.5026 5.83333C24.5026 4.54467 23.4579 3.5 22.1693 3.5C20.8806 3.5 19.8359 4.54467 19.8359 5.83333C19.8359 7.122 20.8806 8.16667 22.1693 8.16667Z"
        stroke="#FFB13D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83333 24.5C7.122 24.5 8.16667 23.4554 8.16667 22.1667C8.16667 20.878 7.122 19.8334 5.83333 19.8334C4.54467 19.8334 3.5 20.878 3.5 22.1667C3.5 23.4554 4.54467 24.5 5.83333 24.5Z"
        stroke="#FFB13D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
