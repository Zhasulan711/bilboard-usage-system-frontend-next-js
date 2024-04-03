import { MenuSidebar } from "@/components/menu-side-bar/MenuSidebar";
import { SettingsNavbar } from "./_components/SettingsNavBar";
import { Header } from "@/components/header/Header";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <div className="relative">
      <div className="flex flex-row absolute">
        <MenuSidebar />
        <Header />
      </div>

      <main className="absolute inset-0 left-[362px] top-[88px]">
        <div className="flex flex-row space-x-[184px]">
          <SettingsNavbar />
          {children}
        </div>
      </main>
    </div>
  );
}
