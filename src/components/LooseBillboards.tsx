import { CompassIcon, SmallShoppingBagIcon } from "@/components/Icons";
import { LOOSE_BILLBOARDS_LISt } from "@/constants";

export const LooseBillboards = () => {
  return (
    <div className="bg-[#0F1623] ml-[20px] w-[322px] h-[420px] rounded-lg pl-[26px] pt-[12px]">
      <h1 className="text-white text-[28px] font-medium">Loose billboards</h1>
      <div className="flex flex-col pt-[20px] space-y-[10px] h-[360px] overflow-y-auto scroll-hidden">
        {/* add DRY */}
        {LOOSE_BILLBOARDS_LISt.map(({ title, colorClass, id }, index) => {
          return (
            <div
              key={index}
              className="w-[270px] h-[32px] flex flex-row items-center space-x-[80px]"
            >
              <div className="flex flex-row space-x-[10px] items-center w-[160px]">
                <div
                  className={`bg-color-${colorClass} rounded-[5px] w-[32px] h-[32px] justify-center flex items-center`}
                >
                  <CompassIcon />
                </div>
                <div className="flex flex-col">
                  <h2 className="text-white text-[12px] font-normal whitespace-nowrap">
                    {title}
                  </h2>
                  <h3 className="text-[#3C424C] text-[11px] font-normal">
                    {id}
                  </h3>
                </div>
              </div>
              <SmallShoppingBagIcon />
            </div>
          );
        })}
      </div>
    </div>
  );
};
