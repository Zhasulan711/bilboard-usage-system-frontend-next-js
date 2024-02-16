"use client";

import Link from "next/link";

export default function MenuSidebar() {
  return (
    <aside className="w-[342px] bg-[#0F1623] h-full">
      {/* Navigate bars */}
      <nav className="flex flex-col mt-[88px] ml-[30px]">
        <div
          className="flex flex-row space-x-[10px] items-center pl-2
        w-[286px] h-[46px] rounded-lg"
        >
          {/* Dashboard */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 3.5H4.66667C4.02233 3.5 3.5 4.02233 3.5 4.66667V12.8333C3.5 13.4777 4.02233 14 4.66667 14H10.5C11.1443 14 11.6667 13.4777 11.6667 12.8333V4.66667C11.6667 4.02233 11.1443 3.5 10.5 3.5Z"
              stroke="#FFB13D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.3334 3.5H17.5C16.8557 3.5 16.3334 4.02233 16.3334 4.66667V8.16667C16.3334 8.811 16.8557 9.33333 17.5 9.33333H23.3334C23.9777 9.33333 24.5 8.811 24.5 8.16667V4.66667C24.5 4.02233 23.9777 3.5 23.3334 3.5Z"
              stroke="#FFB13D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.3334 14H17.5C16.8557 14 16.3334 14.5223 16.3334 15.1667V23.3333C16.3334 23.9777 16.8557 24.5 17.5 24.5H23.3334C23.9777 24.5 24.5 23.9777 24.5 23.3333V15.1667C24.5 14.5223 23.9777 14 23.3334 14Z"
              stroke="#FFB13D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 18.6667H4.66667C4.02233 18.6667 3.5 19.1891 3.5 19.8334V23.3334C3.5 23.9777 4.02233 24.5001 4.66667 24.5001H10.5C11.1443 24.5001 11.6667 23.9777 11.6667 23.3334V19.8334C11.6667 19.1891 11.1443 18.6667 10.5 18.6667Z"
              stroke="#FFB13D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Link href="#" className="text-[#3F454F] text-[19px] font-normal">
            Dashboard
          </Link>
        </div>

        {/* Transaction */}
        <div
          className="flex flex-row space-x-[10px] w-[286px] h-[46px] rounded-lg
        hover:bg-[#182235] items-center pl-2"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6666 3.5L23.3333 8.16667L18.6666 12.8333"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.3333 8.16675H4.66663"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.33329 24.5001L4.66663 19.8334L9.33329 15.1667"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.66663 19.8333H23.3333"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Link href="#" className="text-[#3F454F] text-[19px] font-normal">
            Transaction
          </Link>
        </div>

        {/* Messages */}
        <div
          className="flex flex-row space-x-[10px] w-[286px] h-[46px] rounded-lg
        hover:bg-[#182235] items-center pl-2"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.3334 10.4999C16.3334 11.1188 16.0875 11.7122 15.65 12.1498C15.2124 12.5874 14.6189 12.8333 14 12.8333H7.00004L2.33337 17.4999V4.66659C2.33337 3.38325 3.38337 2.33325 4.66671 2.33325H14C14.6189 2.33325 15.2124 2.57908 15.65 3.01667C16.0875 3.45425 16.3334 4.04775 16.3334 4.66659V10.4999Z"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 10.5H23.3333C23.9521 10.5 24.5456 10.7458 24.9832 11.1834C25.4208 11.621 25.6666 12.2145 25.6666 12.8333V25.6667L21 21H14C13.3811 21 12.7876 20.7542 12.35 20.3166C11.9125 19.879 11.6666 19.2855 11.6666 18.6667V17.5"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Link href="#" className="text-[#3F454F] text-[19px] font-normal">
            Messages
          </Link>
        </div>

        {/* Analytics */}
        <div
          className="flex flex-row space-x-[10px] w-[286px] h-[46px] rounded-lg
        hover:bg-[#182235] items-center pl-2"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 3.5V24.5H24.5"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.6666 11.6667H9.33329C8.68896 11.6667 8.16663 12.1891 8.16663 12.8334V18.6667C8.16663 19.3111 8.68896 19.8334 9.33329 19.8334H11.6666C12.311 19.8334 12.8333 19.3111 12.8333 18.6667V12.8334C12.8333 12.1891 12.311 11.6667 11.6666 11.6667Z"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 5.83325H18.6667C18.0223 5.83325 17.5 6.35559 17.5 6.99992V18.6666C17.5 19.3109 18.0223 19.8333 18.6667 19.8333H21C21.6443 19.8333 22.1667 19.3109 22.1667 18.6666V6.99992C22.1667 6.35559 21.6443 5.83325 21 5.83325Z"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <Link href="#" className="text-[#3F454F] text-[19px] font-normal">
            {" "}
            Analytics{" "}
          </Link>
        </div>

        {/* Setting */}
        <div
          className="flex flex-row space-x-[10px] w-[286px] h-[46px] rounded-lg
        hover:bg-[#182235] items-center pl-2"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.5 18.6666V9.3333C24.4996 8.92412 24.3916 8.52225 24.1868 8.16799C23.982 7.81373 23.6877 7.51956 23.3333 7.31497L15.1667 2.6483C14.812 2.44351 14.4096 2.33569 14 2.33569C13.5904 2.33569 13.188 2.44351 12.8333 2.6483L4.66667 7.31497C4.31231 7.51956 4.01798 7.81373 3.81321 8.16799C3.60843 8.52225 3.50042 8.92412 3.5 9.3333V18.6666C3.50042 19.0758 3.60843 19.4777 3.81321 19.8319C4.01798 20.1862 4.31231 20.4804 4.66667 20.685L12.8333 25.3516C13.188 25.5564 13.5904 25.6642 14 25.6642C14.4096 25.6642 14.812 25.5564 15.1667 25.3516L23.3333 20.685C23.6877 20.4804 23.982 20.1862 24.1868 19.8319C24.3916 19.4777 24.4996 19.0758 24.5 18.6666Z"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 18.6666C16.5774 18.6666 18.6667 16.5772 18.6667 13.9999C18.6667 11.4226 16.5774 9.33325 14 9.33325C11.4227 9.33325 9.33337 11.4226 9.33337 13.9999C9.33337 16.5772 11.4227 18.6666 14 18.6666Z"
              stroke="white"
              strokeOpacity="0.2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Link href="#" className="text-[#3F454F] text-[19px] font-normal">
            {" "}
            Setting{" "}
          </Link>
        </div>
      </nav>
    </aside>
  );
}
