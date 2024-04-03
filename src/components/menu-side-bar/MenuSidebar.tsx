import { MenuSideNavBars } from "@/components/menu-side-bar/MenuSideNavBars";
import { PostNewAds } from "@/components/menu-side-bar/PostNewAds";

export const MenuSidebar = () => {
  return (
    <aside className="w-[342px] bg-[#0F1623] h-[100vh] pt-[88px] px-[30px] flex flex-col">
      <MenuSideNavBars />
      <PostNewAds />
    </aside>
  );
};
