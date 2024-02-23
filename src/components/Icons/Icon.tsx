import { FC } from "react";
import { AnalyticsIcon } from "./AnalyticsIcon";
import { BellIcon } from "./BellIcon";
import { DashboardIcon } from "./DashboardIcon";
import { MessagesIcon } from "./MessagesIcon";
import { SearchIcon } from "./SearchIcon";
import { SettingsIcon } from "./SettingsIcon";
import { TransactionIcon } from "./TransactionIcon";

const Icons = {
  bell: BellIcon,
  search: SearchIcon,
  dashboard: DashboardIcon,
  analytics: AnalyticsIcon,
  transaction: TransactionIcon,
  messages: MessagesIcon,
  settings: SettingsIcon,
};

export type Icons = keyof typeof Icons;

export type IconProps = {
  type: Icons;
  handleSVGClick?: IconProps["type"] extends "search" ? () => void : undefined;
};

export const Icon: FC<IconProps> = ({ type, ...props }) => {
  const IconComponent = Icons[type];
  return <IconComponent {...props} />;
};
