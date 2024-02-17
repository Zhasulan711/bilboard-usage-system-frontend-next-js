import Image from "next/image";
import Link from "next/link";

import MenuSidebar from "../components/MenuSidebar/MenuSidebar";
import Header from "../components/Header/Header";
import { DistrictMapIcon } from "../components/Icons";
import { DISTRICT_MAP_LIST } from "@/constants";

export default function Home() {
  return (
    <div className="relative">
      <div className="flex flex-row absolute">
        <MenuSidebar />
        <Header />
      </div>
      <main className="absolute inset-0 left-[362px] top-[88px]">
        <div className="flex flex-col">
          <div className="flex flex-row">
            {/* The number of your ads in district */}
            <div className="bg-[#0F1623] w-[663px] h-[600px] rounded-lg pl-[30px] flex flex-col space-y-[20px]">
              <h1 className="text-white text-[28px] font-medium">
                The number of your ads in district
              </h1>
              <div className="flex flex-row space-x-[45px]">
                <DistrictMapIcon />
                <div className="flex flex-col space-y-[25px]">
                  {DISTRICT_MAP_LIST.map(({ title, colorClass }) => {
                    return (
                      <div key={title} className="flex flex-row space-x-[4px] h-[24px] items-center">
                        <div className={`rounded-full w-[10px] h-[10px] bg-color-${colorClass}`}></div>
                        <h2 className="text-white text-xl font-normal">
                          {title}
                        </h2>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              {/* Your budget */}
              <div className="bg-[#0F1623] ml-[20px] w-[321px] h-[160px] rounded-lg"></div>
              {/* Calendar */}
              <div className="bg-[#0F1623] ml-[20px] mt-[20px] w-[321px] h-[420px] rounded-lg"></div>
            </div>

            <div className="flex flex-col">
              {/* Loose billboards */}
              <div className="bg-[#0F1623] ml-[20px] w-[322px] h-[420px] rounded-lg"></div>
              {/* Your personal manager */}
              <div className="bg-[#0F1623] ml-[20px] mt-[20px] w-[322px] h-[160px] rounded-lg"></div>
            </div>
          </div>

          {/* Information about your add */}
          <div className="bg-[#0F1623] mt-[20px] w-[1346px] h-[380px] rounded-lg"></div>
        </div>
      </main>
    </div>
  );
}
