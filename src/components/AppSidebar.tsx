import React, { useState } from "react";
import { appSidebarAtom } from "@/atoms/appSidebar.atom";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChartPie,
  ShoppingBag,
  FolderClosed,
  BookOpen,
  ChevronRight,
  SquareUserRound,
  IdCard,
  Users,
  PanelLeft,
  MessageCircle,
} from "lucide-react";
import { Accordion, AccordionItem } from "./Accordian";
import { Button } from "./ui/button";
import { useRecoilValue } from "recoil";

interface MenuItem {
  title: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface MenuItemWithChildren extends MenuItem {
  options: string[];
}

// Menu items for dashboards
const items: MenuItem[] = [
  {
    title: "Default",
    url: "#",
    icon: ChartPie,
  },
  {
    title: "eCommerce",
    url: "#",
    icon: ShoppingBag,
  },
  {
    title: "Projects",
    url: "#",
    icon: FolderClosed,
  },
  {
    title: "Online Courses",
    url: "#",
    icon: BookOpen,
  },
];

// Menu items for pages
const pages: MenuItemWithChildren[] = [
  {
    title: "User Profile",
    url: "#",
    icon: SquareUserRound,
    options: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
  },
  {
    title: "Account",
    url: "#",
    icon: IdCard,
    options: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
  },
  {
    title: "Corporate",
    url: "#",
    icon: Users,
    options: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
  },
  {
    title: "Blog",
    url: "#",
    icon: PanelLeft,
    options: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
  },
  {
    title: "Social",
    url: "#",
    icon: MessageCircle,
    options: ["Overview", "Projects", "Campaigns", "Documents", "Followers"],
  },
];
const AppSidebar = () => {
  const [activeItem, setActiveItem] = useState<string>(items[0].title);
  const isOpen = useRecoilValue(appSidebarAtom);

  return isOpen ? (
    <div className=" px-4 py-5 flex flex-col gap-4 bg-white bg-opacity-10 overflow-auto scrollbar-none w-[212px] h-screen leading-5 border-r border-white-10">
      {/* Sidebar Header */}
      <div>
        <div className="p-1 flex flex-row items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="ml-2">Elfo</p>
        </div>
      </div>
      <div>
        <div>
          <div className="flex flex-row gap-2">
            <Button className="text-white-40" variant="ghost">
              Favorites
            </Button>
            <Button className="text-white text-opacity-20" variant="ghost">
              Recently
            </Button>
          </div>
          <div className="px-2 py-1">
            <ul className="list-disc list-inside custom-bullet">
              <li>Overview</li>
            </ul>
          </div>
          <div className="px-2 py-1">
            <ul className="list-disc list-inside custom-bullet">
              <li>Projects</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sidebar Group 1 */}
      <div className="flex flex-col gap-1">
        <p className="text-white-40 text-sm">Dashboards</p>
        <div className="flex flex-col gap-1">
          {items.map((item) => (
            <div key={item.title}>
              <a
                href={item.url}
                onClick={() => setActiveItem(item.title)}
                className={`flex items-center pl-0 pr-2 py-1 gap-1 rounded-lg transition-colors relative ${
                  activeItem === item.title
                    ? "bg-white bg-opacity-10 text-white"
                    : "text-white "
                }`}
              >
                <div
                  className={`h-5 w-6 left-0 flex items-center justify-center ml-1 ${
                    activeItem === item.title
                      ? " before:content-[''] before:absolute before:left-0 before:h-4 before:w-1 before:bg-[#C6C7F8] before:top-1/2 before:-translate-y-1/2 before:rounded-lg"
                      : ""
                  }`}
                >
                  {activeItem === item.title ? null : (
                    <ChevronRight className="text-white text-opacity-20 w-4 h-4" />
                  )}
                </div>
                <div className="flex flex-row gap-1">
                  <item.icon className="w-5 h-5" />
                  <span>{item.title}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar Group 2 */}
      <div className="flex flex-col gap-1">
        <p className="text-white-40 text-sm">Pages</p>
        <div>
          <Accordion className="flex flex-col gap-1">
            {pages.map((page) => (
              <AccordionItem
                key={page.title}
                title={page.title}
                icon={page.icon}
                className="border-none"
                options={page.options}
              />
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  ) : null;
};

export default AppSidebar;
