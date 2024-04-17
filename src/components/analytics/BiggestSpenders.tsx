import { TengeSmallCurrencyIcon } from "@/components/Icons";

const SpenderItem = ({ name, amount }: { name: string; amount: number }) => (
  <div className="flex flex-row space-x-[155px]">
    <div className="w-[50px]">
      <h3 className="text-xl font-normal text-[#D9D9D9] dark:text-[#575C65]">{name}</h3>
    </div>
    <h3 className="text-black dark:text-white text-base font-normal">
      {amount.toLocaleString()}
    </h3>
  </div>
);

export const BiggestSpenders = () => {
  const spenders = [
    { name: "Alatau", amount: 325432 },
    { name: "Bostandyk", amount: 325432 },
    { name: "Medeu", amount: 325432 },
  ];

  return (
    <div className="bg-white dark:bg-[#0F1623] w-[321px] h-[160px] rounded-lg flex flex-col pl-[26px] pt-[16px]">
      <div className="flex flex-row items-center">
        <h1 className="text-black dark:text-white text-2xl font-normal">Biggest spenders,</h1>
        <TengeSmallCurrencyIcon />
      </div>

      {spenders.map((spender, index) => (
        <SpenderItem key={index} name={spender.name} amount={spender.amount} />
      ))}
    </div>
  );
};
