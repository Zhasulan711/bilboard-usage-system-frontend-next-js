"use client";

import { useEffect, useState } from "react";

interface Billboard {
  id: number;
  address: string;
  price: string;
}

interface Order {
  id: number;
  totalSum: string;
  quantity: number;
  billboards: Billboard[];
}

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders");
        if (!response.ok) {
          throw new Error(`Failed to fetch orders: ${response.statusText}`);
        }
        const data: Order[] = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Failed to fetch orders:", error);
      }
    };

    fetchOrders();

    const intervalId = setInterval(fetchOrders, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (orders.length === 0) {
    return (
      <a
        href="/post-add"
        className="hover:text-[#FF9800] text-[20px] ml-[430px]"
      >
        No purchased checks of billboards. but you can buy billboards by
        clicking here.
      </a>
    );
  }
  return (
    <div className="text-black dark:text-white text-4xl font-bold">
      <h1 className="ml-[20px]">Checks of purchased billboards</h1>

      <div className="grid grid-cols-3 gap-[20px] overflow-y-auto overflow-x-hidden scroll-hidden mt-[20px]
      h-[920px] laptop:h-[1070px]">
        {orders.length === 0 ? (
          <a
            href="/post-add"
            className="hover:text-[#FF9800] text-[20px] ml-[430px]"
          >
            No purchased checks of billboards. but you can buy billboards by
            clicking here.
          </a>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="w-[444px] h-[384px] bg-white dark:bg-[#0F1623] flex flex-col space-y-[5px] pl-[16px] pt-[2px] rounded"
            >
              <div className="flex flex-col space-y-[12px]">
                <h1 className="text-black dark:text-white text-[32px] font-normal">
                  Order #{order.id}
                </h1>
                <div className="flex flex-col space-y-[10px] text-black dark:text-white text-xl font-normal">
                  <h2>
                    <span className="text-[#464B56]">Sum: </span>
                    {order.totalSum}
                  </h2>
                  <h2>
                    <span className="text-[#464B56]">Quantity: </span>
                    {order.quantity}
                  </h2>
                  <h2>
                    <span className="text-[#464B56]">Paid for: </span> Visa Card
                  </h2>
                </div>
              </div>

              <div className="flex flex-col space-y-[12px]">
                <h1 className="text-black dark:text-white text-[32px] font-normal">
                  Billboards
                </h1>
                <div className="flex flex-col space-y-[10px] text-xl font-normal h-[145px] overflow-y-auto">
                  {order.billboards &&
                    order.billboards.map((billboard, index) => (
                      <h2 key={billboard.id}>
                        {index + 1}. {billboard.address}
                      </h2>
                    ))}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
