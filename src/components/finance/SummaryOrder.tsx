import { RedTrashIcon } from "@/components/Icons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const orders = [
  {
    street: "Abaya-Muratbaeva",
    image: "",
    category: "Food",
    region: "Almalinsk",
    Time: "15:00-17:00",
    GRP: "560,000",
    price: "103,000",
  },
  {
    street: "Abaya-Muratbaeva",
    image: "",
    category: "Food",
    region: "Almalinsk",
    Time: "15:00-17:00",
    GRP: "560,000",
    price: "103,000",
  },
  {
    street: "Abaya-Muratbaeva",
    image: "",
    category: "Food",
    region: "Almalinsk",
    Time: "15:00-17:00",
    GRP: "560,000",
    price: "103,000",
  },
];

export const SummaryOrder = () => {
  return (
    <Card className="w-[505px] h-[395px] bg-[#0F1623] border-transparent flex flex-col -space-y-[16px]">
      <CardHeader className="text-white text-[26px] font-medium -mt-[16px]">
        Summary order
      </CardHeader>
      <CardContent className="flex flex-col space-y-[18px]">
        {orders.map((order, index) => (
          <div key={index} className="flex flex-row space-x-[16px]">
            <div className="w-[90px] h-[90px] bg-zinc-400 rounded-[10px]">
              <img src={order.image} alt="order" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-2xl font-normal">
                {order.street}
              </h1>
              <div className="flex flex-row text-white text-opacity-40 text-xs font-normal space-x-[16px]">
                <div className="flex flex-col">
                  <h1>Category:</h1>
                  <h1>Region:</h1>
                  <h1>Time:</h1>
                  <h1>GRP:</h1>
                </div>
                <div className="flex flex-col">
                  <h1>{order.category}</h1>
                  <h1>{order.region}</h1>
                  <h1>{order.Time}</h1>
                  <h1>{order.GRP}</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-[19px] items-end">
              <RedTrashIcon />
              <h1 className="text-white text-4xl font-normal">{order.price}</h1>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
