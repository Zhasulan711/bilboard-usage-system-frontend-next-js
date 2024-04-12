import { BuyingTable } from "@/components/post-new-ads/BuyingTable";

export const Buying = () => {
  const navHeader = [
    {
      title: "All",
      width: "41px",
    },
    {
      title: "Loose",
      width: "65px",
    },
    {
      title: "Employed",
      width: "90px",
    },
  ];

  return (
    <div className="h-[980px] rounded-[14px] bg-[#0F1623] w-[1005px]">
      <div className="flex flex-row space-x-[620px] px-[26px] py-[13px] items-center border-b-[12px] border-[#010714]">
        {/* Buying navBars */}
        <h1 className="text-[28px] font-medium text-white">Buying</h1>
        <div className="flex flex-row space-x-[10px] mt-[5px]">
          {navHeader.map(({ title, width }, index) => (
            <div
              className="bg-[#070F1B] h-[31px] flex justify-center items-center text-white text-base font-normal rounded-lg"
              style={{ width: width }}
              key={index}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
      {/* Buying table */}
      <BuyingTable />
    </div>
  );
};
