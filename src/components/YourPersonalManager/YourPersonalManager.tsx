import Image from "next/image";
import { MessageCircleMoreIcon } from "@/components/Icons";

export default function YourPersonalManager() {
  return (
    <div className="bg-[#0F1623] ml-[20px] mt-[20px] w-[322px] h-[160px] rounded-lg pl-[26px] pt-[14px]">
      <h1 className="text-white text-2xl font-medium">Your personal manager</h1>
      <div className="flex flex-row mt-[30px] space-x-[60px] items-center">
        <div className="flex flex-row space-x-[10px]">
          <Image
            src="/images/manager-logo.png"
            alt="Manager logo"
            width={47}
            height={47}
            className="rounded-full h-[47px]"
          />
          <div className="flex flex-col -space-y-[5px]">
            <h2 className="text-white text-xl font-normal">Dmitry Ivanov</h2>
            <h3 className="text-[#3F454F] text-base font-normal">Manager</h3>
          </div>
        </div>
        <MessageCircleMoreIcon />
      </div>
    </div>
  );
}
