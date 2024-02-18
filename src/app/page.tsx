import Image from "next/image";
import Link from "next/link";

import MenuSidebar from "../components/MenuSidebar/MenuSidebar";
import Header from "../components/Header/Header";
import {
  DistrictMapIcon,
  TengeLargeCurrencyIcon,
  TengeSmallCurrencyIcon,
  CompassIcon,
  ShoppingBagIcon,
} from "../components/Icons";
import { DISTRICT_MAP_LIST } from "@/constants";
import { LOOSE_BILLBOARDS_LISt } from "@/constants";

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
            <div className="bg-[#0F1623] w-[663px] h-[600px] rounded-lg pl-[30px] flex flex-col space-y-[20px] pt-[10px]">
              <h1 className="text-white text-[28px] font-medium">
                The number of your ads in district
              </h1>
              <div className="flex flex-row space-x-[45px]">
                <DistrictMapIcon />
                <div className="flex flex-col space-y-[25px] mt-[10px]">
                  {DISTRICT_MAP_LIST.map(({ title, colorClass }, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-row space-x-[7px] h-[24px] items-center"
                      >
                        <div
                          className={`rounded-full w-[10px] h-[10px] bg-color-${colorClass}`}
                        ></div>
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
              <div className="bg-[#0F1623] ml-[20px] w-[321px] h-[160px] rounded-lg flex flex-col pl-[30px] pt-[10px]">
                <h1 className="text-white text-[28px] font-medium">
                  Your budget
                </h1>
                <div className="flex flex-row items-center space-x-[3px]">
                  <h1 className="text-white text-5xl font-normal">1,120,448</h1>
                  <TengeLargeCurrencyIcon />
                </div>
                <div className="flex flex-row space-x-[45px] pt-[5px]">
                  <div className="flex flex-col">
                    <h3 className="text-[#696D76] text-xs font-normal">
                      Spent this month
                    </h3>
                    <div className="flex flex-row items-center space-x-[3px]">
                      <h3 className="text-[#CFD0D3] text-xl font-normal">
                        534,234
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
                        413,323
                      </h3>
                      <TengeSmallCurrencyIcon />
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-[#0F1623] ml-[20px] mt-[20px] w-[321px] h-[420px] rounded-lg"></div>
            </div>

            <div className="flex flex-col">
              {/* Loose billboards */}
              <div className="bg-[#0F1623] ml-[20px] w-[322px] h-[420px] rounded-lg pl-[30px] pt-[10px]">
                <h1 className="text-white text-[28px] font-medium">
                  Loose billboards
                </h1>
                <div className="flex flex-col pt-[20px] space-y-[10px] overflow-y-scroll overflow-x-hidden">
                  {/* add DRY */}
                  {LOOSE_BILLBOARDS_LISt.map(
                    ({ title, colorClass, id }, index) => {
                      return (
                        <div
                          key={index}
                          className="w-[270px] h-[32px] flex flex-row items-center space-x-[80px]"
                        >
                          <div className="flex flex-row space-x-[10px] items-center w-[160px]">
                            <div
                              className={`bg-color-${colorClass} rounded-[5px] w-[32px] h-[32px] justify-center flex items-center`}
                            >
                              <CompassIcon />
                            </div>
                            <div className="flex flex-col">
                              <h2 className="text-white text-[12px] font-normal whitespace-nowrap">
                                {title}
                              </h2>
                              <h3 className="text-[#3C424C] text-[11px] font-normal">
                                {id}
                              </h3>
                            </div>
                          </div>
                          <ShoppingBagIcon />
                        </div>
                      );
                    }
                  )}
                </div>
              </div>

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
