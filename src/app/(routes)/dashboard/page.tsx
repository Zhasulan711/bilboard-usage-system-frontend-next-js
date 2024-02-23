import MenuSidebar from "@/components/MenuSidebar/MenuSidebar";
import Header from "@/components/Header/Header";
import SmallAddInformation from "@/components/SmallAddInformation/SmallAddInformation";
import YourPersonalManager from "@/components/YourPersonalManager/YourPersonalManager";
import LooseBillboards from "@/components/LooseBillboards/LooseBillboards";
import Calendar from "@/components/Calendar/Calendar";
import YourBudget from "@/components/YourBudget/YourBudget";
import AmountAdsDistrict from "@/components/AmountAdsDistrict/AmountAdsDistrict";

export default function Home() {
  return (
    <div className="relative">
      <div className="flex flex-row absolute">
        <MenuSidebar />
        <Header />
      </div>

      <main className="absolute inset-0 left-[362px] top-[88px]">
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
  );
}
