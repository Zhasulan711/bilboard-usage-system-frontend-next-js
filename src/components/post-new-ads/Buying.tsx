import { BuyingTable } from "@/components/post-new-ads/BuyingTable";

// const navHeader = [
//   {
//     title: "All",
//     width: "41px",
//   },
//   {
//     title: "Loose",
//     width: "65px",
//   },
//   {
//     title: "Employed",
//     width: "90px",
//   },
// ];

export const Buying = () => {
  return (
    <div
      className="rounded-[14px] bg-white dark:bg-[#0F1623]
    h-[880px] ipad:h-[980px] laptop:h-[1130px] QHD:h-[1340px]"
    >
      <div className="flex flex-row space-x-[620px] px-[54px] py-[13px] items-center border-b-[12px] border-[#D9D9D9] dark:border-[#010714]">
        {/* Buying navBars */}
        <h1 className="text-[28px] font-medium text-black dark:text-white">
          Buying Billboards
        </h1>
        {/* <div className="flex flex-row space-x-[10px] mt-[5px]">
          {navHeader.map(({ title, width }, index) => (
            <div
              className="bg-[#D9D9D9] dark:bg-[#070F1B] h-[31px] flex justify-center items-center text-black dark:text-white text-base font-normal rounded-lg"
              style={{ width: width }}
              key={index}
            >
              {title}
            </div>
          ))}
        </div> */}
      </div>
      {/* Buying table */}
      <BuyingTable />
    </div>
  );
};
