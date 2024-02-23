import MenuSidebar from "@/components/MenuSidebar/MenuSidebar";
import Header from "@/components/Header/Header";
import Parameters from "@/components/Parameters/Parameters";
import Buying from "@/components/Buying/Buying";

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
