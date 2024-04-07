import { TotalSpending } from "@/components/analytics/TotalSpending";
import { BiggestSpenders } from "@/components/analytics/BiggestSpenders";
import { Diagram } from "@/components/analytics/Diagram";
import { Recommendation } from "@/components/analytics/Recommendation";
import { LooseBillboards } from "@/components/LooseBillboards";
import { LargeInformationAddTable } from "@/components/analytics/LargeInformationAddTable";
import { Graphs } from "@/components/analytics/Graphs";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col space-y-[20px] overflow-y-auto scroll-hidden max-h-[970px]">
      <div className="flex flex-row space-x-[20px]">
        <div className="flex flex-col space-y-[20px]">
          <div className="flex flex-row space-x-[20px]">
            {/* Total and Biggest Spenders */}
            <div className="flex flex-col space-y-[20px]">
              <TotalSpending />
              <BiggestSpenders />
            </div>
            <Diagram />
          </div>

          {/* Graphs */}
          <div className="w-[1004px] h-[600px] -mt-[580px]">
            <Graphs />
          </div>
        </div>
        {/* Rec and LooseBillboards */}
        <div className="flex flex-col">
          <Recommendation />
          <div className="-ml-[20px]">
            <LooseBillboards />
          </div>
        </div>
      </div>
      {/* Table */}
      <LargeInformationAddTable />
    </div>
  );
}
