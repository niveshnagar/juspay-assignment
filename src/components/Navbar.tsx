import { Star, Slash, History, Bell } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import SidebarToggle from "./SidebarToggle";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <div className=" bg-white border-[#1C1C1C1A] dark:bg-[#1C1C1C] dark:border-white-10 flex flex-row justify-between w-full h-[68px] px-7 py-5 border-b ">
      <div className="flex flex-rows gap-2 items-center">
        <SidebarToggle sidebarType={"app"} />
        <Star className="text-[#1C1C1C] dark:text-white  h-7 w-7 p-1" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-[#1C1C1C66] dark:text-[#FFFFFF66]">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash className="text-[#1C1C1C33] dark:text-[#FFFFFF33]"/>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/Default" className="text-[#1C1C1C] dark:text-[#FFFFFF]">Default</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-rows gap-5 items-center">
        {/* Search bar */}
        <SearchBar />
        <div className="flex flex-rows gap-2 items-center">
          <ThemeToggle />
          <History className="text-[#1C1C1C] dark:text-white h-7 w-7 p-1" />
          <Bell className="text-[#1C1C1C] dark:text-white h-7 w-7 p-1" />
          <SidebarToggle sidebarType={"notification"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
