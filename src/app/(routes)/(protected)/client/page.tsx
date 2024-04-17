"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import { SettingsNavbar } from "../_components/SettingsNavBar";

export default function ClientPage() {
  const user = useCurrentUser();
  return (
    <div className="flex flex-row space-x-[184px]">
      <SettingsNavbar />
      <UserInfo user={user} label="Basic information" />
    </div>
  );
}
