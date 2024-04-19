"use client"

import { CalendarSpendingMoney } from "@/components/dashboard/CalendarSpendingMoney";
import { Calendar } from "@/components/ui/calendar";

export const CalendarWrapper = () => {
  
  return (
    <div className="bg-white dark:bg-[#0F1623] ml-[20px] mt-[20px] w-[321px] h-[420px] rounded-lg pl-[15px] pt-[10px]">
      <h1 className="text-black dark:text-white text-2xl font-normal ml-[8px]">
        Calendar
      </h1>

      <Calendar />

      <CalendarSpendingMoney />
    </div>
  );
};
