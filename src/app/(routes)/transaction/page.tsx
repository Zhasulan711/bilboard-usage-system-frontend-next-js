import Image from "next/image";

import MenuSidebar from "@/components/MenuSidebar/MenuSidebar";
import Header from "@/components/Header/Header";
import {
  SearchIcon
} from "@/components/Icons";

export default function Home() {
  return (
    <div className="relative">
      <div className="flex flex-row absolute">
        <MenuSidebar />
        <Header />
      </div>

      <main className="absolute inset-0 left-[362px] top-[88px]">
        <div className="flex flex-row">
          <div className="bg-[#0F1623] rounded-lg h-[40px] w-[451px] flex flex-row items-center pl-[30px] space-x-[10px]">
            <SearchIcon />
            <h2 className="text-[#575C65] text-xl font-normal">Search</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
