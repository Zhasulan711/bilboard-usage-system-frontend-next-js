import { SmallAddInformation } from "@/components/dashboard/SmallAddInformation";
import { YourPersonalManager } from "@/components/dashboard/YourPersonalManager";
import { LooseBillboards } from "@/components/LooseBillboards";
import { CalendarWrapper } from "@/components/dashboard/CalendarWrapper";
import { YourBudget } from "@/components/dashboard/YourBudget";
import { AmountAdsDistrict } from "@/components/dashboard/AmountAdsDistrict";
import { Tooltip } from "@/components/dashboard/ToolTip";

export default function DashboardPage() {
  return (
    <div className="flex flex-col 
    h-[600px] ipad:h-[660px] laptop:h-[770px] QHD:h-[925px]
    overflow-y-auto">
      <div className="flex flex-row">
        <AmountAdsDistrict />

        <div className="flex flex-col space-y-[20px]">
          {/* <YourBudget /> */}
          <LooseBillboards />
          {/* <CalendarWrapper  /> */}
        </div>

        <div className="flex flex-col">
          {/* <CalendarWrapper  /> */}
          {/* <YourPersonalManager /> */}
          <Tooltip />
        </div>
      </div>

      <SmallAddInformation />
    </div>
  );
}
