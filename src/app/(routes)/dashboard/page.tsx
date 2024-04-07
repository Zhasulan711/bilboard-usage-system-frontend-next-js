import { MenuSidebar } from "@/components/menu-side-bar/MenuSidebar";
import { Header } from "@/components/header/Header";
import { SmallAddInformation } from "@/components/dashboard/SmallAddInformation";
import { YourPersonalManager } from "@/components/dashboard/YourPersonalManager";
import { LooseBillboards } from "@/components/LooseBillboards";
import { Calendar } from "@/components/dashboard/Calendar";
import { YourBudget } from "@/components/dashboard/YourBudget";
import { AmountAdsDistrict } from "@/components/dashboard/AmountAdsDistrict";

export default function Home() {
  return (
    <div className="flex flex-row">
      <MenuSidebar />
      <div className="flex flex-col space-y-[20px]">
        <Header />
        <main className="ml-[20px]">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <AmountAdsDistrict />

              <div className="flex flex-col">
                <YourBudget />
                <Calendar />
              </div>

              <div className="flex flex-col">
                <LooseBillboards />
                <YourPersonalManager />
              </div>
            </div>

            <SmallAddInformation />
          </div>
        </main>
      </div>
    </div>
  );
}
