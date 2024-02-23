import MenuSidebar from "@/components/MenuSidebar/MenuSidebar";
import Header from "@/components/Header/Header";
import { SearchIcon } from "@/components/Icons";
import { TRANSACTION_TABLE_LIST } from "@/constants/transactionTableList";

export default function Home() {
  const navItems = [
    { name: "All", width: "53px" },
    { name: "Region", width: "91px" },
    { name: "Price", width: "75px" },
    { name: "Size", width: "68px" },
    { name: "Category", width: "110px" },
    { name: "Date", width: "72px" },
    { name: "Status", width: "86px" },
  ];

  const navTable = [
    "Address",
    "Price, tg",
    "GRP",
    "Time",
    "Place number",
    "Size, m",
    "Category",
    "Date",
    "Status",
  ];

  return (
    <div className="relative">
      <div className="flex flex-row absolute">
        <MenuSidebar />
        <Header />
      </div>

      {/* searchBar */}
      <main className="absolute inset-0 left-[362px] top-[88px]">
        <div className="flex flex-row space-x-[275px]">
          <div className="bg-[#0F1623] rounded-lg h-[40px] w-[451px] flex flex-row items-center pl-[20px] space-x-[20px]">
            <SearchIcon />
            <h2 className="text-[#575C65] text-xl font-normal">Search</h2>
          </div>

          {/* navbars */}
          <div className="flex flex-row space-x-[10px]">
            {navItems.map(({name, width}, index) => (
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

        {/* table */}
        <div className="overflow-y-auto max-h-[930px] border rounded-lg mt-[16px] border-transparent">
          <table className="table-fixed divide-y-[32px] divide-[#010714] border rounded-lg">
            <thead className="text-[#B7B9BE] font-normal rounded-xl bg-[#0F1623]">
              <tr className="">
                {navTable.map((item, index) => (
                  <th
                    scope="col"
                    className="px-[26px] py-[18px] text-left"
                    key={index}
                  >
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-white text-lg font-normal bg-[#0F1623] divide-y-[16px] divide-[#010714]">
              {TRANSACTION_TABLE_LIST.map(
                (
                  {
                    address,
                    price,
                    grp,
                    time,
                    placeNumber,
                    size,
                    category,
                    date,
                    status,
                  },
                  index
                ) => {
                  return (
                    <tr key={index}>
                      <td className="px-6 py-4">{address}</td>
                      <td className="px-6 py-4">{price}</td>
                      <td className="px-6 py-4">{grp}</td>
                      <td className="px-6 py-4">{time}</td>
                      <td className="px-6 py-4">{placeNumber}</td>
                      <td className="px-6 py-4">{size}</td>
                      <td className="px-6 py-4">{category}</td>
                      <td className="px-6 py-4">{date}</td>
                      <td className="px-6 py-4">{status}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
