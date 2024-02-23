import { DistrictMapIcon } from "@/components/Icons";
import { DISTRICT_MAP_LIST } from "@/constants";

export default function AmountAdsDistrict() {
  return (
    <div className="bg-[#0F1623] w-[663px] h-[600px] rounded-lg pl-[26px] flex flex-col space-y-[20px] pt-[12px]">
      <h1 className="text-white text-[28px] font-medium">
        The number of your ads in district
      </h1>
      <div className="flex flex-row space-x-[45px]">
        <DistrictMapIcon />
        <div className="flex flex-col space-y-[25px] mt-[10px]">
          {DISTRICT_MAP_LIST.map(({ title, colorClass }, index) => {
            return (
              <div
                key={index}
                className="flex flex-row space-x-[7px] h-[24px] items-center"
              >
                <div
                  className={`rounded-full w-[10px] h-[10px] bg-color-${colorClass}`}
                ></div>
                <h2 className="text-white text-xl font-normal">{title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
