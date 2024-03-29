import { MenuSidebar } from "@/components/menu-side-bar/MenuSidebar";
import { Header } from "@/components/header/Header";
import { TotalSpending } from "@/components/analytics/TotalSpending";
import { BiggestSpenders } from "@/components/analytics/BiggestSpenders";
import { Diagram } from "@/components/analytics/Diagram";
import { Recommendation } from "@/components/analytics/Recommendation";
import { LooseBillboards } from "@/components/LooseBillboards";
import { LargeInformationAddTable } from "@/components/analytics/LargeInformationAddTable";
import { Graphs } from "@/components/analytics/Graphs";

export default function AnalyticsPage() {
  return (
    <div className="relative">
      <div className="flex flex-row absolute">
        <MenuSidebar />
        <Header />
      </div>

      <main className="absolute inset-0 left-[362px] top-[88px]">
        <div className="flex flex-col space-y-[20px]">
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
              <div className="w-[1004px] h-[600px] overflow-y-auto overflow-x-hidden -mt-[580px]">
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
      </main>
    </div>
  );
}
