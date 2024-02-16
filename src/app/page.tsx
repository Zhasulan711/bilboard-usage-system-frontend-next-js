import Image from "next/image";
import Link from "next/link";

import MenuSidebar from "../components/MenuSidebar/MenuSidebar";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className="relative">
      <div className="flex flex-row h-screen">
        <MenuSidebar />
        <Header />
      </div>
      <main className="absolute">
        <div className="flex flex-col">
          <div className="flex flex-row">
            {/* The number of your ads in district */}
            <div className="bg-[#0F1623] ml-[362px] mt-[88px] w-[663px] h-[600px] rounded-lg"></div>

            <div className="flex flex-col">
              {/* Your budget */}
              <div className="bg-[#0F1623] ml-[20px] mt-[90px] w-[321px] h-[160px] rounded-lg"></div>
              {/* Calendar */}
              <div className="bg-[#0F1623] ml-[20px] mt-[20px] w-[321px] h-[420px] rounded-lg"></div>
            </div>

            <div className="flex flex-col">
              {/* Loose billboards */}
              <div className="bg-[#0F1623] ml-[20px] mt-[90px] w-[322px] h-[420px] rounded-lg"></div>
              {/* Your personal manager */}
              <div className="bg-[#0F1623] ml-[20px] mt-[20px] w-[322px] h-[160px] rounded-lg"></div>
            </div>
          </div>

          {/* Information about your add */}
          <div className="bg-[#0F1623] ml-[362px] mt-[20px] w-[1346px] h-[380px] rounded-lg"></div>
        </div>
      </main>
    </div>
  );
}
