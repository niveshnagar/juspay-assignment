import { Star, Slash, History, Bell, Search } from "lucide-react";
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
    <div className=" flex flex-row justify-between w-full h-[68px] px-7 py-5 bg-white bg-opacity-10 ">
      <div className="flex flex-rows gap-2 items-center">
        <SidebarToggle sidebarType={"app"} />
        <Star className="h-7 w-7 p-1" />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-rows gap-5 items-center">
        {/* Search bar */}
        <SearchBar />
        <div className="flex flex-rows gap-2 items-center">
          <ThemeToggle />
          <History className="h-7 w-7 p-1" />
          <Bell className="h-7 w-7 p-1" />
          <SidebarToggle sidebarType={"notification"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
