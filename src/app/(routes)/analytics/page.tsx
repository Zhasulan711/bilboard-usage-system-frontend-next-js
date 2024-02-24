import MenuSidebar from "@/components/MenuSidebar/MenuSidebar";
import Header from "@/components/Header/Header";
import TotalSpending from "@/components/TotalSpending/TotalSpending";
import BiggestSpenders from "@/components/BiggestSpenders/BiggestSpenders";
import Diagram from "@/components/Diagram/Diagram";
import Recommendation from "@/components/Recommendation/Recommendation";
import LooseBillboards from "@/components/LooseBillboards/LooseBillboards";
import LargeInformationAddTable from "@/components/LargeInformationAddTable/LargeInformationAddTable";
import Graphs from "@/components/Graphs/Graphs";
import {
  ChevronDownAddIcon,
  GraphsIcon,
  GraphsSecondIcon,
} from "@/components/Icons";

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
              <TotalSpending />
              <BiggestSpenders />
            </div>
            <Diagram />
            <div className="flex flex-col">
              <Recommendation />
              <div className="-ml-[20px]">
                <LooseBillboards />
              </div>
            </div>
          </div>
          
        </div>
        {/* Graphs */}
        <div className="w-[1004px] h-[600px] overflow-y-auto overflow-x-hidden -mt-[580px]">
            <Graphs />
            <LargeInformationAddTable />
          </div>
      </main>
    </div>
  );
}
