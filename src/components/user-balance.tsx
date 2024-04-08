import { ExtendedUser } from "@/../next-auth";
import {
  TengeLargeCurrencyIcon,
  TengeSmallCurrencyIcon,
} from "@/components/Icons";

interface UserInfoProps {
  user?: ExtendedUser;
}

export const UserBalance = ({ user }: UserInfoProps) => {
  return (
    <div className="bg-[#0F1623] ml-[20px] w-[321px] h-[160px] rounded-lg flex flex-col pl-[26px] pt-[12px]">
      <h1 className="text-white text-[28px] font-medium">Your budget</h1>
      <div className="flex flex-row items-center space-x-[3px]">
        <h1 className="text-white text-5xl font-normal">{user?.balance}</h1>
        <TengeLargeCurrencyIcon />
      </div>
      <div className="flex flex-row space-x-[45px] pt-[5px]">
        <div className="flex flex-col">
          <h3 className="text-[#696D76] text-xs font-normal">
            Spent this month
          </h3>
          <div className="flex flex-row items-center space-x-[3px]">
            <h3 className="text-[#CFD0D3] text-xl font-normal">
              421421
            </h3>
            <TengeSmallCurrencyIcon />
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#696D76] text-xs font-normal">
            Spent last month
          </h3>
          <div className="flex flex-row items-center space-x-[3px]">
            <h3 className="text-[#CFD0D3] text-xl font-normal">
              421421
            </h3>
            <TengeSmallCurrencyIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
