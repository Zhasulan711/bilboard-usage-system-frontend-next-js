import { TengeSmallCurrencyIcon } from "@/components/Icons";

export const BiggestSpenders = () => {
  return (
    <div className="bg-[#0F1623] w-[321px] h-[160px] rounded-lg flex flex-col pl-[26px] pt-[16px]">
      <div className="flex flex-row items-center">
        <h1 className="text-white text-2xl font-normal">Biggest spenders,</h1>
        <TengeSmallCurrencyIcon />
      </div>

      {/* need to fix that code! */}
      <div className="flex flex-row space-x-[155px]">
        <div className="w-[50px]">
          <h3 className="text-xl font-normal text-[#575C65]">Alatau</h3>
        </div>
        <h3 className="text-white text-base font-normal">325,432</h3>
      </div>

      <div className="flex flex-row space-x-[155px]">
        <div className="w-[50px] ">
          <h3 className="text-xl font-normal text-[#575C65]">Bostandyk</h3>
        </div>
        <h3 className="text-white text-base font-normal">325,432</h3>
      </div>

      <div className="flex flex-row space-x-[155px]">
        <div className="w-[50px]">
          <h3 className="text-xl font-normal text-[#575C65]">Medeu</h3>
        </div>
        <h3 className="text-white text-base font-normal">325,432</h3>
      </div>
    </div>
  );
};
