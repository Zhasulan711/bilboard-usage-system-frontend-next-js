"use client";

import { BillingSummary } from "@/components/finance/BillingSummary";
import { CardVisa } from "@/components/finance/CardVisa";
import { ContinueOrder } from "@/components/finance/ContinueOrder";
import { PaymentMethod } from "@/components/finance/PaymentMethod";
import { ShippingAddress } from "@/components/finance/ShippingAddress";
import { SummaryOrder } from "@/components/finance/SummaryOrder";

import { useState } from "react";

export default function FinancePage() {
  const [showOrder, setShowOrder] = useState(true);

  const handleContinue = () => {
    setShowOrder(false);
  };

  return (
    <div className="flex">
      {showOrder ? (
        <div className="flex flex-col space-y-[20px] ml-[430px]">
          <SummaryOrder />
          <ContinueOrder onContinue={handleContinue} />
        </div>
      ) : (
        <div className="flex flex-col space-y-[20px] ml-[300px]">
          <h1 className="text-black dark:text-white text-4xl font-bold ml-[20px] -mb-[20px]">Choose or Create Card</h1>
          <CardVisa />
          <ShippingAddress />
          <BillingSummary />
        </div>
      )}
    </div>
  );
}
