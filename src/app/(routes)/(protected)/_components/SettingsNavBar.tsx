"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

export const SettingsNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="p-4 rounded-xl w-[320px] h-[185px] shadow-sm bg-white dark:bg-[#0F1623] text-black dark:text-white text-[28px] font-medium">
      Settings
      <div className="flex flex-col space-y-[10px] mt-[16px]">
      <Button
          asChild
          variant={pathname === "/client" ? "default" : "outline"}
        >
          <Link href="/client">Account information</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/settings" ? "default" : "outline"}
        >
          <Link href="/settings">Data and privacy</Link>
        </Button>

      </div>
    </nav>
  );
};
