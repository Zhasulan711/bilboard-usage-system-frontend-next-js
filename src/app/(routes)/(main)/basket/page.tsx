"use client";

import { BillingSummary } from "@/components/basket/BillingSummary";
import { CardVisa } from "@/components/basket/CardVisa";
import { ContinueOrder } from "@/components/basket/ContinueOrder";
import { PayOrder } from "@/components/basket/PayOrder";
// import { PaymentMethod } from "@/components/finance/PaymentMethod";
import { ShippingAddress } from "@/components/basket/ShippingAddress";
import { SummaryOrder } from "@/components/basket/SummaryOrder";

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
