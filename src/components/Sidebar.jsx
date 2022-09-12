import React from "react";
import SidebarRow from "./SidebarRow";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import {
  CalendarIcon,
  ClockIcon,
  ComputerDesktopIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar() {
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow
        src="https://pm1.narvii.com/6638/f962c40591d207fcff5d06df0cc023729e37874c_hq.jpg"
        title="profile"
      />
      <SidebarRow Icon={ComputerDesktopIcon} title="Watch" />
      <SidebarRow Icon={UserIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
    </div>
  );
}
