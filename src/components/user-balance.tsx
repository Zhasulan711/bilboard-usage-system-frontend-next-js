import { ExtendedUser } from "@/../next-auth";
import {
  TengeLargeCurrencyIcon,
} from "@/components/Icons";

interface UserInfoProps {
  user?: ExtendedUser;
}

export const UserBalance = ({ user }: UserInfoProps) => {
  return (
    <div className="bg-[#0F1623] ml-[20px] w-[321px] h-[160px] rounded-lg flex flex-col space-y-[10px] pl-[26px] justify-center">
      <h1 className="text-white text-[28px] font-medium text-left">Your budget</h1>
      <div className="flex flex-row items-center space-x-[3px]">
        <h1 className="text-white text-5xl font-normal">{user?.balance}</h1>
        <TengeLargeCurrencyIcon />
      </div>
    </div>
  );
};
