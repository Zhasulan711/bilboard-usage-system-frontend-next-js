import { BillingSummary } from "@/components/finance/BillingSummary";
import { PaymentMethod } from "@/components/finance/PaymentMethod";
import { ShippingAddress } from "@/components/finance/ShippingAddress";
import { SummaryOrder } from "@/components/finance/SummaryOrder";

export default async function FinancePage() {
  return (
    <div className="flex flex-row space-x-[20px]">
      <div className="flex flex-col space-y-[20px]">
        <SummaryOrder />
        <BillingSummary />
      </div>

      <div className="flex flex-col space-y-[20px]">
        <ShippingAddress />
        <PaymentMethod />
      </div>
    </div>
  );
}
