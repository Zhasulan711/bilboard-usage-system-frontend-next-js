"use client";

import { BillingSummary } from "@/components/finance/BillingSummary";
import { CardVisa } from "@/components/finance/CardVisa";
import { ContinueOrder } from "@/components/finance/ContinueOrder";
import { PayOrder } from "@/components/finance/PayOrder";
// import { PaymentMethod } from "@/components/finance/PaymentMethod";
import { ShippingAddress } from "@/components/finance/ShippingAddress";
import { SummaryOrder } from "@/components/finance/SummaryOrder";

import { useState } from "react";

export default function FinancePage() {
  const [showOrder, setShowOrder] = useState(true);
  const [showBillingSummary, setShowBillingSummary] = useState(false);

  const handleContinue = () => {
    setShowOrder(false);
  };

  const handlePayStart = () => {
    setShowBillingSummary(true);
  };

  const handleCloseBillingSummary = () => {
    setShowBillingSummary(false); // Hide BillingSummary on 'Cancel'
  };

  return (
    <div className="relative">
      {showOrder ? (
        <div className="flex flex-col space-y-[20px] ml-[430px]">
          <SummaryOrder />
          <ContinueOrder onContinue={handleContinue} />
        </div>
      ) : (
        <div className="flex flex-col space-y-[20px] ml-[300px]">
          <h1 className="text-black dark:text-white text-4xl font-bold ml-[20px]">
            Choose or Create Card
          </h1>
          <div className="h-[910px] overflow-y-auto overflow-x-hidden flex flex-col space-y-[20px]">
            <CardVisa />
            <ShippingAddress />
            <PayOrder onPayStart={handlePayStart}/>
          </div>
        </div>
      )}
      {showBillingSummary && <BillingSummary onClose={handleCloseBillingSummary} />}
    </div>
  );
}
