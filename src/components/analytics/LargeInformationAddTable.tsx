// import { useState } from "react";
import { INFORMATION_ADD_TABLE_LIST } from "@/constants";
import { CalendarDaysIcon, ChevronDownAddIcon } from "@/components/Icons";

export const LargeInformationAddTable = () => {
  const headerTable = [
    "Address",
    "Price",
    "GRP",
    "Time",
    "Place number",
    "Size",
    "Category",
  ];
  const navItems = [
    { name: "All", width: "53px" },
    { name: "Region", width: "91px" },
    { name: "Price", width: "75px" },
    { name: "Size", width: "68px" },
    { name: "Category", width: "110px" },
    { name: "Date", width: "72px" },
    { name: "Status", width: "86px" },
  ];
  return (
    <div className="mt-[20px]">
      <div className="bg-[#0F1623] px-6 py-6 border-b-2 border-[#182235] rounded-lg">
        <div className="flex flex-row space-x-[200px]">
          <h1 className="text-white text-[28px] font-medium ml-[10px]">
            Information about your add
          </h1>
          <div className="flex flex-row space-x-[60px] mt-[10px]">
            <div className="flex flex-row space-x-[10px] items-center">
              <CalendarDaysIcon />
              <h2 className="text-white text-xl font-normal">
                01 Aug. - 01 Sep.
              </h2>
              <ChevronDownAddIcon />
            </div>
            <div className="flex flex-row space-x-[10px] items-center">
              <h2 className="text-white text-xl font-normal">Compare</h2>
              <ChevronDownAddIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-row space-x-[100px] text-center pl-[10px] pt-[20px]">
          <h1 className="text-white text-2xl font-normal">
            Almatinsk district
          </h1>
          <div className="flex flex-row space-x-[10px]">
            {navItems.map(({ name, width }, index) => (
              <div
                className="h-[40px] flex items-center justify-center bg-[#0B101F] text-xl font-normal text-white rounded-lg"
                style={{ width: width }}
                key={index}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
        <table className="w-full table-auto divide-y-[3px] divide-[#182235] mt-[10px] border-b-2 border-[#182235]">
          <thead className="text-[#6F737B] text-base font-normal">
            <tr>
              {headerTable.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-[10px] py-[10px] text-left"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-white text-lg font-normal divide-y-[3px] divide-[#182235]">
            {INFORMATION_ADD_TABLE_LIST.map(
              (
                { address, price, grp, time, placeNumber, size, category },
                index
              ) => {
                return (
                  <tr key={index}>
                    <td className="px-[10px] py-[10px]">{address}</td>
                    <td className="px-[10px] py-[10px]">{price}</td>
                    <td className="px-[10px] py-[10px]">{grp}</td>
                    <td className="px-[10px] py-[10px]">{time}</td>
                    <td className="px-[10px] py-[10px]">{placeNumber}</td>
                    <td className="px-[10px] py-[10px]">{size}</td>
                    <td className="px-[10px] py-[10px]">{category}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>

        <div className="flex flex-row space-x-[100px] text-center pl-[10px] pt-[20px]">
          <h1 className="text-white text-2xl font-normal">
            Almatinsk district
          </h1>
          <div className="flex flex-row space-x-[10px]">
            {navItems.map(({ name, width }, index) => (
              <div
                className="h-[40px] flex items-center justify-center bg-[#0B101F] text-xl font-normal text-white rounded-lg"
                style={{ width: width }}
                key={index}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
        <table className="w-full table-auto divide-y-[3px] divide-[#182235] mt-[10px] border-b-2 border-[#182235]">
          <thead className="text-[#6F737B] text-base font-normal">
            <tr>
              {headerTable.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-[10px] py-[10px] text-left"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-white text-lg font-normal divide-y-[3px] divide-[#182235]">
            {INFORMATION_ADD_TABLE_LIST.map(
              (
                { address, price, grp, time, placeNumber, size, category },
                index
              ) => {
                return (
                  <tr key={index}>
                    <td className="px-[10px] py-[10px]">{address}</td>
                    <td className="px-[10px] py-[10px]">{price}</td>
                    <td className="px-[10px] py-[10px]">{grp}</td>
                    <td className="px-[10px] py-[10px]">{time}</td>
                    <td className="px-[10px] py-[10px]">{placeNumber}</td>
                    <td className="px-[10px] py-[10px]">{size}</td>
                    <td className="px-[10px] py-[10px]">{category}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
        <div className="flex flex-row space-x-[100px] text-center pl-[10px] pt-[20px]">
          <h1 className="text-white text-2xl font-normal">
            Almatinsk district
          </h1>
          <div className="flex flex-row space-x-[10px]">
            {navItems.map(({ name, width }, index) => (
              <div
                className="h-[40px] flex items-center justify-center bg-[#0B101F] text-xl font-normal text-white rounded-lg"
                style={{ width: width }}
                key={index}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
        <table className="w-full table-auto divide-y-[3px] divide-[#182235] mt-[10px] border-b-2 border-[#182235]">
          <thead className="text-[#6F737B] text-base font-normal">
            <tr>
              {headerTable.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-[10px] py-[10px] text-left"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-white text-lg font-normal divide-y-[3px] divide-[#182235]">
            {INFORMATION_ADD_TABLE_LIST.map(
              (
                { address, price, grp, time, placeNumber, size, category },
                index
              ) => {
                return (
                  <tr key={index}>
                    <td className="px-[10px] py-[10px]">{address}</td>
                    <td className="px-[10px] py-[10px]">{price}</td>
                    <td className="px-[10px] py-[10px]">{grp}</td>
                    <td className="px-[10px] py-[10px]">{time}</td>
                    <td className="px-[10px] py-[10px]">{placeNumber}</td>
                    <td className="px-[10px] py-[10px]">{size}</td>
                    <td className="px-[10px] py-[10px]">{category}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>

        <div className="flex flex-row space-x-[100px] text-center pl-[10px] pt-[20px]">
          <h1 className="text-white text-2xl font-normal">
            Almatinsk district
          </h1>
          <div className="flex flex-row space-x-[10px]">
            {navItems.map(({ name, width }, index) => (
              <div
                className="h-[40px] flex items-center justify-center bg-[#0B101F] text-xl font-normal text-white rounded-lg"
                style={{ width: width }}
                key={index}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
        <table className="w-full table-auto divide-y-[3px] divide-[#182235] mt-[10px] border-b-2 border-[#182235]">
          <thead className="text-[#6F737B] text-base font-normal">
            <tr>
              {headerTable.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-[10px] py-[10px] text-left"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-white text-lg font-normal divide-y-[3px] divide-[#182235]">
            {INFORMATION_ADD_TABLE_LIST.map(
              (
                { address, price, grp, time, placeNumber, size, category },
                index
              ) => {
                return (
                  <tr key={index}>
                    <td className="px-[10px] py-[10px]">{address}</td>
                    <td className="px-[10px] py-[10px]">{price}</td>
                    <td className="px-[10px] py-[10px]">{grp}</td>
                    <td className="px-[10px] py-[10px]">{time}</td>
                    <td className="px-[10px] py-[10px]">{placeNumber}</td>
                    <td className="px-[10px] py-[10px]">{size}</td>
                    <td className="px-[10px] py-[10px]">{category}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>

        <div className="flex flex-row space-x-[100px] text-center pl-[10px] pt-[20px]">
          <h1 className="text-white text-2xl font-normal">
            Almatinsk district
          </h1>
          <div className="flex flex-row space-x-[10px]">
            {navItems.map(({ name, width }, index) => (
              <div
                className="h-[40px] flex items-center justify-center bg-[#0B101F] text-xl font-normal text-white rounded-lg"
                style={{ width: width }}
                key={index}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
        <table className="w-full table-auto divide-y-[3px] divide-[#182235] mt-[10px] border-b-2 border-[#182235]">
          <thead className="text-[#6F737B] text-base font-normal">
            <tr>
              {headerTable.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-[10px] py-[10px] text-left"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-white text-lg font-normal divide-y-[3px] divide-[#182235]">
            {INFORMATION_ADD_TABLE_LIST.map(
              (
                { address, price, grp, time, placeNumber, size, category },
                index
              ) => {
                return (
                  <tr key={index}>
                    <td className="px-[10px] py-[10px]">{address}</td>
                    <td className="px-[10px] py-[10px]">{price}</td>
                    <td className="px-[10px] py-[10px]">{grp}</td>
                    <td className="px-[10px] py-[10px]">{time}</td>
                    <td className="px-[10px] py-[10px]">{placeNumber}</td>
                    <td className="px-[10px] py-[10px]">{size}</td>
                    <td className="px-[10px] py-[10px]">{category}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>

        <div className="flex flex-row space-x-[100px] text-center pl-[10px] pt-[20px]">
          <h1 className="text-white text-2xl font-normal">
            Almatinsk district
          </h1>
          <div className="flex flex-row space-x-[10px]">
            {navItems.map(({ name, width }, index) => (
              <div
                className="h-[40px] flex items-center justify-center bg-[#0B101F] text-xl font-normal text-white rounded-lg"
                style={{ width: width }}
                key={index}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
        <table className="w-full table-auto divide-y-[3px] divide-[#182235] mt-[10px] border-b-2 border-[#182235]">
          <thead className="text-[#6F737B] text-base font-normal">
            <tr>
              {headerTable.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-[10px] py-[10px] text-left"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-white text-lg font-normal divide-y-[3px] divide-[#182235]">
            {INFORMATION_ADD_TABLE_LIST.map(
              (
                { address, price, grp, time, placeNumber, size, category },
                index
              ) => {
                return (
                  <tr key={index}>
                    <td className="px-[10px] py-[10px]">{address}</td>
                    <td className="px-[10px] py-[10px]">{price}</td>
                    <td className="px-[10px] py-[10px]">{grp}</td>
                    <td className="px-[10px] py-[10px]">{time}</td>
                    <td className="px-[10px] py-[10px]">{placeNumber}</td>
                    <td className="px-[10px] py-[10px]">{size}</td>
                    <td className="px-[10px] py-[10px]">{category}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>

        <div className="flex flex-row space-x-[100px] text-center pl-[10px] pt-[20px]">
          <h1 className="text-white text-2xl font-normal">
            Almatinsk district
          </h1>
          <div className="flex flex-row space-x-[10px]">
            {navItems.map(({ name, width }, index) => (
              <div
                className="h-[40px] flex items-center justify-center bg-[#0B101F] text-xl font-normal text-white rounded-lg"
                style={{ width: width }}
                key={index}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
        <table className="w-full table-auto divide-y-[3px] divide-[#182235] mt-[10px] border-b-2 border-[#182235]">
          <thead className="text-[#6F737B] text-base font-normal">
            <tr>
              {headerTable.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-[10px] py-[10px] text-left"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-white text-lg font-normal divide-y-[3px] divide-[#182235]">
            {INFORMATION_ADD_TABLE_LIST.map(
              (
                { address, price, grp, time, placeNumber, size, category },
                index
              ) => {
                return (
                  <tr key={index}>
                    <td className="px-[10px] py-[10px]">{address}</td>
                    <td className="px-[10px] py-[10px]">{price}</td>
                    <td className="px-[10px] py-[10px]">{grp}</td>
                    <td className="px-[10px] py-[10px]">{time}</td>
                    <td className="px-[10px] py-[10px]">{placeNumber}</td>
                    <td className="px-[10px] py-[10px]">{size}</td>
                    <td className="px-[10px] py-[10px]">{category}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>

        <div className="flex flex-row space-x-[100px] text-center pl-[10px] pt-[20px]">
          <h1 className="text-white text-2xl font-normal">
            Almatinsk district
          </h1>
          <div className="flex flex-row space-x-[10px]">
            {navItems.map(({ name, width }, index) => (
              <div
                className="h-[40px] flex items-center justify-center bg-[#0B101F] text-xl font-normal text-white rounded-lg"
                style={{ width: width }}
                key={index}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
        <table className="w-full table-auto divide-y-[3px] divide-[#182235] mt-[10px] border-b-2 border-[#182235]">
          <thead className="text-[#6F737B] text-base font-normal">
            <tr>
              {headerTable.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-[10px] py-[10px] text-left"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-white text-lg font-normal divide-y-[3px] divide-[#182235]">
            {INFORMATION_ADD_TABLE_LIST.map(
              (
                { address, price, grp, time, placeNumber, size, category },
                index
              ) => {
                return (
                  <tr key={index}>
                    <td className="px-[10px] py-[10px]">{address}</td>
                    <td className="px-[10px] py-[10px]">{price}</td>
                    <td className="px-[10px] py-[10px]">{grp}</td>
                    <td className="px-[10px] py-[10px]">{time}</td>
                    <td className="px-[10px] py-[10px]">{placeNumber}</td>
                    <td className="px-[10px] py-[10px]">{size}</td>
                    <td className="px-[10px] py-[10px]">{category}</td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
