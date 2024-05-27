import { MenuSideNavBars } from "@/components/menu-side-bar/MenuSideNavBars";
import { PostNewAds } from "@/components/menu-side-bar/PostNewAds";
import { ThemeMode } from "@/components/menu-side-bar/ThemeMode";

export const MenuSidebar = () => {
  return (
    <aside className="w-[342px] bg-white dark:bg-[#0F1623] h-[100vh] px-[30px] flex flex-col space-y-[40px]
    pt-[0px] ipad:pt-[40px] laptop:pt-[88px] QHD:pt-[88px]">
      <MenuSideNavBars />
      <ThemeMode />
      <PostNewAds />
    </aside>
  );
};
