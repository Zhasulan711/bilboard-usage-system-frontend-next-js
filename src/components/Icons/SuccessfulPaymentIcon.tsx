import { FC } from "react";
import { DefaultIconComponentProps } from "./types";

export const SuccessfulPaymentIcon: FC<DefaultIconComponentProps> = ({
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.2071 9.79289C19.5976 10.1834 19.5976 10.8166 19.2071 11.2071L8.20711 22.2071C7.81658 22.5976 7.18342 22.5976 6.79289 22.2071L1.29289 16.7071C0.902369 16.3166 0.902369 15.6834 1.29289 15.2929C1.68342 14.9024 2.31658 14.9024 2.70711 15.2929L7.5 20.0858L17.7929 9.79289C18.1834 9.40237 18.8166 9.40237 19.2071 9.79289Z"
        fill="#198754"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30.7063 9.79289C31.0968 10.1834 31.0968 10.8166 30.7063 11.2071L19.7063 22.2071C19.3158 22.5976 18.6826 22.5976 18.2921 22.2071L15.3671 19.2821C14.9766 18.8916 14.9766 18.2584 15.3671 17.8679C15.7576 17.4774 16.3908 17.4774 16.7813 17.8679L18.9992 20.0858L29.2921 9.79289C29.6826 9.40237 30.3158 9.40237 30.7063 9.79289Z"
        fill="#198754"
      />
    </svg>
  );
};
