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
    title: "Messages",
    icon: "messages",
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
    title: "Contact with us",
    icon: "contacts",
  },
  {
    title: "Log out",
    icon: "logOut",
  }
];
