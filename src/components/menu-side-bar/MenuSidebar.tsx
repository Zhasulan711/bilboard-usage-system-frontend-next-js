import { HeaderNavBars } from "@/components/menu-side-bar/HeaderNavBars";
import { PostNewAds } from "@/components/menu-side-bar/PostNewAds";

export const MenuSidebar = () => {
  return (
    <aside className="w-[342px] bg-[#0F1623] h-[100vh] pt-[88px] px-[30px] flex flex-col">
      <HeaderNavBars />
      <PostNewAds />
    </aside>
  );
};
