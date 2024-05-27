import { TotalSpending } from "@/components/analytics/TotalSpending";
import { BiggestSpenders } from "@/components/analytics/BiggestSpenders";
import { Diagram } from "@/components/analytics/Diagram";
import { Recommendation } from "@/components/analytics/Recommendation";
import { LargeInformationAddTable } from "@/components/analytics/LargeInformationAddTable";

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col">
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
        </div>

        <div className="flex flex-col">
          <Recommendation />
        </div>
      </div>
      {/* Table */}
      <LargeInformationAddTable />
    </div>
  );
}
