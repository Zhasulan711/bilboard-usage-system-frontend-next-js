import {
  TengeLargeCurrencyIcon,
  TengeSmallCurrencyIcon,
} from "@/components/Icons";

export const TotalSpending = () => {
  return (
    <div className="bg-[#0F1623] w-[321px] h-[160px] rounded-lg flex flex-col pl-[26px] pt-[12px]">
      <h1 className="text-white text-[28px] font-medium">Total spending</h1>
      <div className="flex flex-row items-center space-x-[3px]">
        <h1 className="text-white text-5xl font-normal">2,324,792</h1>
        <TengeLargeCurrencyIcon />
      </div>
      <div className="flex flex-row space-x-[45px] pt-[5px]">
        <div className="flex flex-col">
          <h3 className="text-[#696D76] text-xs font-normal">This month</h3>
          <div className="flex flex-row items-center space-x-[3px]">
            <h3 className="text-[#CFD0D3] text-xl font-normal">534,234</h3>
            <TengeSmallCurrencyIcon />
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#696D76] text-xs font-normal">Last month</h3>
          <div className="flex flex-row items-center space-x-[3px]">
            <h3 className="text-[#CFD0D3] text-xl font-normal">413,323</h3>
            <TengeSmallCurrencyIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
