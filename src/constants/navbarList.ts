import { Icons } from "@/components/Icons/Icon";

export type NavbarList = {
  title: string;
  icon: Icons;
};

export const NAVBAR_LIST: NavbarList[] = [
  {
    title: "Dashboard",
    icon: "dashboard",
  },
  {
    title: "Transaction",
    icon: "transaction",
  },
  {
    title: "Analytics",
    icon: "analytics",
  },
  {
    title: "Settings",
    icon: "settings",
  },
  {
    title: "Contact With Us",
    icon: "contactWithUs",
  },
  {
    title: "Log Out",
    icon: "logOutIcon",
  }
];
