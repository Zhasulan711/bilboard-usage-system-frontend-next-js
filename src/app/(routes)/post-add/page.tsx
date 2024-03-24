import { MenuSidebar } from "@/components/menu-side-bar/MenuSidebar";
import { Header } from "@/components/header/Header";
import { Parameters } from "@/components/post-new-ads/Parameters";
import { Buying } from "@/components/post-new-ads/Buying";

export default function PostAddPage() {
  return (
    <div className="relative">
      <div className="flex flex-row absolute">
        <MenuSidebar />
        <Header />
      </div>

      <main className="absolute inset-0 left-[362px] top-[88px] flex flex-row space-x-[20px]">
        <Parameters />
        <Buying />
      </main>
    </div>
  );
}
