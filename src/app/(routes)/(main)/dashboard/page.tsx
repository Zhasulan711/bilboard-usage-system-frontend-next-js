import { SmallAddInformation } from "@/components/dashboard/SmallAddInformation";
import { YourPersonalManager } from "@/components/dashboard/YourPersonalManager";
import { LooseBillboards } from "@/components/LooseBillboards";
import { CalendarWrapper } from "@/components/dashboard/CalendarWrapper";
import { YourBudget } from "@/components/dashboard/YourBudget";
import { AmountAdsDistrict } from "@/components/dashboard/AmountAdsDistrict";
import { Tooltip } from "@/components/dashboard/ToolTip";

export default function DashboardPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <AmountAdsDistrict />

        <div className="flex flex-col">
          <YourBudget />
          <CalendarWrapper  />
        </div>

        <div className="flex flex-col">
          <LooseBillboards />
          <YourPersonalManager />
          <Tooltip />
        </div>
      </div>

      <SmallAddInformation />
    </div>
  );
}
