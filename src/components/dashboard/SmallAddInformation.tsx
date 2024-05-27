import { SmallAddInformationTable } from "@/components/dashboard/SmallAddInformationTable";

export const SmallAddInformation = () => {
  return (
    <div
      className="bg-white dark:bg-[#0F1623] mt-[20px] rounded-lg pl-[26px] pt-[14px]
    h-[500px] ipad:h-[500px] laptop:h-[500px] QHD:h-[730px]
    w-[1142px] ipad:w-[1287px] laptop:w-[1542px] QHD:w-[1873px]"
    >
      <div className="flex flex-row space-x-[475px]">
        <h1 className="text-black dark:text-white text-[28px] font-medium ml-[10px]">
          Information about your add
        </h1>
        {/* <div className="flex flex-row space-x-[60px] mt-[10px]">
          <div className="flex flex-row space-x-[10px] items-center">
            <CalendarDaysIcon />
            <h2 className="text-black dark:text-white text-xl font-normal">
              01 Aug. - 01 Sep.
            </h2>
            <ChevronDownAddIcon />
          </div>
          <div className="flex flex-row space-x-[10px] items-center">
            <h2 className="text-black dark:text-white text-xl font-normal">
              Almalinsk district
            </h2>
            <ChevronDownAddIcon />
          </div>
        </div> */}
      </div>

      {/* table */}
      <SmallAddInformationTable />
    </div>
  );
};
