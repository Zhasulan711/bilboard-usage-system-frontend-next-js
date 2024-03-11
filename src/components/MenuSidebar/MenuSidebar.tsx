import HeaderNavBars from "../HeaderNavBars/HeaderNavBars";
import PostNewAds from "../PostNewAds/PostNewAds";

export default function MenuSidebar() {
  return (
    <aside className="w-[342px] bg-[#0F1623] h-[100vh] pt-[88px] px-[30px] flex flex-col">
      <HeaderNavBars />
      <PostNewAds />
    </aside>
  );
}
