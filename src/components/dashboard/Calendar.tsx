import { ChevronDownCalendarIcon } from "@/components/Icons";
import { CALENDAR_LIST } from "@/constants";
import { CalendarSpendingMoney } from "@/components/dashboard/CalendarSpendingMoney";

export const Calendar = () => {
  return (
    <div className="bg-white dark:bg-[#0F1623] ml-[20px] mt-[20px] w-[321px] h-[420px] rounded-lg pl-[15px] pt-[16px]">
      <div className="flex flex-row space-x-[110px]">
        <h1 className="text-black dark:text-white text-2xl font-normal">Calendar</h1>
        <div className="flex flex-row items-center">
          <h2 className="text-[#B7B9BE] text-base font-normal">September</h2>
          <ChevronDownCalendarIcon />
        </div>
      </div>
      <div className="gap gap-y-[15px] grid-cols-7 grid mt-[20px]">
        {CALENDAR_LIST.map(({ title, colorClass }, index) => {
          return (
            <div
              key={index}
              className={`bg-color-${colorClass} w-[31px] h-[31px] rounded-full text-white text-lg flex justify-center font-normal items-center`}
            >
              {title}
            </div>
          );
        })}
      </div>
      <CalendarSpendingMoney />
    </div>
  );
};
