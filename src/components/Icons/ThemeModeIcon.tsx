import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const ThemeModeIcon: FC<
  DefaultIconComponentProps & { strokeColor: string }
> = ({ width = 28, height = 28, strokeColor = "white" }) => {
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
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.1328 25.5498C14.376 25.9184 16.6781 25.6236 18.756 24.7016C20.834 23.7796 22.5973 22.2707 23.8293 20.3601C25.0613 18.4496 25.7083 16.2208 25.6907 13.9476C25.6732 11.6743 24.9919 9.45575 23.7306 7.56445"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7501 2.45011C13.5161 2.10895 11.231 2.424 9.17264 3.35696C7.11425 4.28992 5.37115 5.80064 4.15513 7.70555C2.93911 9.61045 2.30253 11.8275 2.32273 14.0874C2.34294 16.3472 3.01906 18.5526 4.26895 20.4354"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.1693 8.16667C23.4579 8.16667 24.5026 7.122 24.5026 5.83333C24.5026 4.54467 23.4579 3.5 22.1693 3.5C20.8806 3.5 19.8359 4.54467 19.8359 5.83333C19.8359 7.122 20.8806 8.16667 22.1693 8.16667Z"
        stroke="#FFAD36"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83333 24.4997C7.122 24.4997 8.16667 23.455 8.16667 22.1663C8.16667 20.8777 7.122 19.833 5.83333 19.833C4.54467 19.833 3.5 20.8777 3.5 22.1663C3.5 23.455 4.54467 24.4997 5.83333 24.4997Z"
        stroke="#FFAD36"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
