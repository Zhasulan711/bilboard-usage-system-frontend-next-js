import Image from "next/image";

import MenuSidebar from "../components/MenuSidebar/MenuSidebar";
import Header from "../components/Header/Header";
import {
  DistrictMapIcon,
  TengeLargeCurrencyIcon,
  TengeSmallCurrencyIcon,
  CompassIcon,
  ShoppingBagIcon,
  MessageCircleMoreIcon,
  ChevronDownCalendarIcon,
  CalendarDaysIcon,
  ChevronDownAddIcon,
} from "../components/Icons";
import {
  DISTRICT_MAP_LIST,
  LOOSE_BILLBOARDS_LISt,
  CALENDAR_LIST,
} from "@/constants";

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
              <div className="bg-[#0F1623] ml-[20px] mt-[20px] w-[321px] h-[420px] rounded-lg pl-[15px] pt-[10px]">
                <div className="flex flex-row space-x-[50px]">
                  <h1 className="text-white text-2xl font-normal">Calendar</h1>
                  <div className="flex flex-row items-center">
                    <h2 className="text-[#B7B9BE] text-base font-normal">
                      September
                    </h2>
                    <ChevronDownCalendarIcon />
                  </div>
                </div>
                <div className="gap gap-y-[15px] grid-cols-7 grid mt-[20px]">
                  {CALENDAR_LIST.map(({ title, colorClass }, index) => {
                    return (
                      <div
                        key={index}
                        className={`bg-color-${colorClass} w-[31px] h-[31px] rounded-full text-white text-lg flex justify-center font-normal items-center`}
                      >
                        {title}
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col space-y-[10px] mt-[20px]">
                  <div className="flex flex-row space-x-[30px]">
                    <div className="flex flex-row items-center space-x-[5px]">
                      <div className="w-2 h-2 bg-color-brownCircle rounded-full"></div>
                      <h3 className="text-white text-xl font-normal">0</h3>
                    </div>
                    <div className="flex flex-row items-center space-x-[5px]">
                      <div className="w-2 h-2 bg-color-brightBrownCircle rounded-full"></div>
                      <h3 className="text-white text-xl font-normal">
                        200k-300k
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-row space-x-[30px]">
                    <div className="flex flex-row items-center space-x-[5px]">
                      <div className="w-2 h-2 bg-color-beigeCircle rounded-full"></div>
                      <h3 className="text-white text-xl font-normal">
                        300k-500k
                      </h3>
                    </div>
                    <div className="flex flex-row items-center space-x-[5px]">
                      <div className="w-2 h-2 bg-color-orangeCircle rounded-full"></div>
                      <h3 className="text-white text-xl font-normal">
                        500k-800k
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-row space-x-[30px]">
                    <div className="flex flex-row items-center space-x-[5px]">
                      <div className="w-2 h-2 bg-color-yellowCircle rounded-full"></div>
                      <h3 className="text-white text-xl font-normal">
                        Above 800k
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              {/* Loose billboards */}
              <div className="bg-[#0F1623] ml-[20px] w-[322px] h-[420px] rounded-lg pl-[30px] pt-[10px] overflow-auto">
                <h1 className="text-white text-[28px] font-medium">
                  Loose billboards
                </h1>
                <div className="flex flex-col pt-[20px] space-y-[10px]">
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
              <div className="bg-[#0F1623] ml-[20px] mt-[20px] w-[322px] h-[160px] rounded-lg pl-[30px] pt-[10px]">
                <h1 className="text-white text-2xl font-medium">
                  Your personal manager
                </h1>
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
                      <h2 className="text-white text-xl font-normal">
                        Dmitry Ivanov
                      </h2>
                      <h3 className="text-[#3F454F] text-base font-normal">
                        Manager
                      </h3>
                    </div>
                  </div>
                  <MessageCircleMoreIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Information about your add */}
          <div className="bg-[#0F1623] mt-[20px] w-[1346px] h-[380px] rounded-lg pl-[30px] pt-[10px]">
            <div className="flex flex-row space-x-[516px]">
              <h1 className="text-white text-[28px] font-medium">
                Information about your add
              </h1>
              <div className="flex flex-row space-x-[60px] mt-[10px]">
                <div className="flex flex-row space-x-[10px] items-center">
                  <CalendarDaysIcon />
                  <h2 className="text-white text-xl font-normal">
                    01 Aug. - 01 Sep.
                  </h2>
                  <ChevronDownAddIcon />
                </div>
                <div className="flex flex-row space-x-[10px] items-center">
                  <h2 className="text-white text-xl font-normal">
                    Almalinsk district
                  </h2>
                  <ChevronDownAddIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
