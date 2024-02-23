import { ChevronDownCalendarIcon } from "@/components/Icons";
import { CALENDAR_LIST } from "@/constants";

export default function Calendar() {
  return (
    <div className="bg-[#0F1623] ml-[20px] mt-[20px] w-[321px] h-[420px] rounded-lg pl-[15px] pt-[16px]">
      <div className="flex flex-row space-x-[110px]">
        <h1 className="text-white text-2xl font-normal">Calendar</h1>
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
      <div className="flex flex-col space-y-[10px] mt-[20px]">
        <div className="flex flex-row space-x-[30px]">
          <div className="flex flex-row items-center space-x-[5px]">
            <div className="w-2 h-2 bg-color-brownCircle rounded-full"></div>
            <h3 className="text-white text-xl font-normal">0</h3>
          </div>
          <div className="flex flex-row items-center space-x-[5px]">
            <div className="w-2 h-2 bg-color-brightBrownCircle rounded-full"></div>
            <h3 className="text-white text-xl font-normal">200k-300k</h3>
          </div>
        </div>

        <div className="flex flex-row space-x-[30px]">
          <div className="flex flex-row items-center space-x-[5px]">
            <div className="w-2 h-2 bg-color-beigeCircle rounded-full"></div>
            <h3 className="text-white text-xl font-normal">300k-500k</h3>
          </div>
          <div className="flex flex-row items-center space-x-[5px]">
            <div className="w-2 h-2 bg-color-orangeCircle rounded-full"></div>
            <h3 className="text-white text-xl font-normal">500k-800k</h3>
          </div>
        </div>

        <div className="flex flex-row space-x-[30px]">
          <div className="flex flex-row items-center space-x-[5px]">
            <div className="w-2 h-2 bg-color-yellowCircle rounded-full"></div>
            <h3 className="text-white text-xl font-normal">Above 800k</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
