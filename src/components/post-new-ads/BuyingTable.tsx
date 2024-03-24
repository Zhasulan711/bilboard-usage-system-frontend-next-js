import { BUYING_TABLE_LIST } from "@/constants/buyingTableList";
import { LargeShoppingBagIcon } from "../Icons";
export const BuyingTable = () => {
  const navTable = [
    "Address",
    "Region",
    "Price",
    "GRP",
    "Time",
    "Category",
    "Buy",
  ];

  return (
    <div className="h-[895px] overflow-y-auto overflow-x-hidden">
      <table className="table-auto divide-y-[20px] divide-[#010714]">
        <thead className="text-[#575C65] text-base font-normal">
          <tr>
            {navTable.map((item, index) => (
              <th key={index} className="py-[20px] px-[26px] text-left">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y-[12px] divide-[#010714] text-white text-base font-normal whitespace-nowrap">
          {BUYING_TABLE_LIST.map(
            ({ address, region, price, grp, time, category }, index) => (
              <tr key={index}>
                <td className="py-[20px] px-[26px]">{address}</td>
                <td className="py-[20px] px-[26px]">{region}</td>
                <td className="py-[20px] px-[26px]">{price}</td>
                <td className="py-[20px] px-[26px]">{grp}</td>
                <td className="py-[20px] px-[26px]">{time}</td>
                <td className="py-[20px] px-[26px]">{category}</td>
                <td className="py-[20px] px-[26px]">
                  <LargeShoppingBagIcon />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
