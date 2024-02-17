import Image from "next/image";
import Link from "next/link";

import MenuSidebar from "../components/MenuSidebar/MenuSidebar";
import Header from "../components/Header/Header";

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
            <div className="bg-[#0F1623] w-[663px] h-[600px] rounded-lg">
              <h1 className="hover:bg-red-600 w-[100px] h-[100px] bg-green-500">LOL</h1>
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
