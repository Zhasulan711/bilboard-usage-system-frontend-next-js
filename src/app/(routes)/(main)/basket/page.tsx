"use client";

import { BillingSummary } from "@/components/basket/BillingSummary";
import { CardVisa } from "@/components/basket/CardVisa";
import { ContinueOrder } from "@/components/basket/ContinueOrder";
import { PayOrder } from "@/components/basket/PayOrder";
// import { PaymentMethod } from "@/components/finance/PaymentMethod";
import { ShippingAddress } from "@/components/basket/ShippingAddress";
import { SummaryOrder } from "@/components/basket/SummaryOrder";

import { useState, useEffect } from "react";

export default function FinancePage() {
  const [showOrder, setShowOrder] = useState(true);
  const [showBillingSummary, setShowBillingSummary] = useState(false);
  const [inCartCount, setInCartCount] = useState<number>(0);

  useEffect(() => {
    const fetchInCartCount = async () => {
      try {
        const response = await fetch("/api/billboards?status=IN_CART");
        const data = await response.json();
        setInCartCount(data.length);
      } catch (error) {
        console.error("Error fetching in-cart count", error);
      }
    };

    fetchInCartCount();

    const intervalId = setInterval(fetchInCartCount, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleContinue = () => {
    setShowOrder(false);
  };

  const handlePayStart = () => {
    setShowBillingSummary(true);
  };

  const handleClosePayOrder = () => {
    setShowOrder(true);
  };

  const handleCloseBillingSummary = () => {
    setShowBillingSummary(false);
  };

  return (
    <div className="relative">
      {showOrder ? (
        <div className="flex flex-col space-y-[10px] ml-[430px]">
          <div className="flex flex-row space-x-[230px] items-center">
            <h1 className="text-black dark:text-white text-4xl font-bold ml-[20px]">
              Basket
            </h1>
            <h2 className="text-neutral-400 text-2xl font-normal mt-[10px]">
              {inCartCount} billboard's
            </h2>
          </div>
          <div className="flex flex-col space-y-[20px]">
            <SummaryOrder />
            <ContinueOrder onContinue={handleContinue} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col space-y-[20px] ml-[300px]">
          <h1 className="text-black dark:text-white text-4xl font-bold ml-[20px]">
            Choose or Create Card
          </h1>
          <div className="h-[910px] overflow-y-auto overflow-x-hidden flex flex-col space-y-[20px]">
            <CardVisa />
            <ShippingAddress />
            <PayOrder
              onPayStart={handlePayStart}
              onClose={handleClosePayOrder}
            />
          </div>
        </div>
      )}
      {showBillingSummary && (
        <BillingSummary onClose={handleCloseBillingSummary} />
      )}
    </div>
  );
}
