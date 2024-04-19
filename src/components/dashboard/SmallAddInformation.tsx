import { CalendarDaysIcon, ChevronDownAddIcon } from "@/components/Icons";
import { SmallAddInformationTable } from "@/components/dashboard/SmallAddInformationTable";

export const SmallAddInformation = () => {
  return (
    <div className="bg-white dark:bg-[#0F1623] mt-[20px] w-[1346px] h-[365px] rounded-lg pl-[26px] pt-[14px]">
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
