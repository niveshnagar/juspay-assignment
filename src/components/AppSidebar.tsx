import React, { useState } from "react";
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
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Accordion, AccordionItem } from "./Accordian";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

// Define the type for the menu items
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

export const AppSidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>(items[0].title);

  return (
    <Sidebar className="box-border leading-5">
      <SidebarContent className="px-4 py-5 gap-4 sidebar overflow-auto scrollbar-none">
        {/* Header */}
        <SidebarHeader>
          <div className="p-1 flex flex-row items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="ml-2">User</p>
          </div>
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
        </SidebarHeader>

        {/* Group 1: Dashboards */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white-40 text-sm">
            Dashboards
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      onClick={() => setActiveItem(item.title)}
                      className={`flex items-center pl-0 pr-2 py-1 gap-1 rounded-lg transition-colors relative ${
                        activeItem === item.title
                          ? "bg-white bg-opacity-10 text-white"
                          : "text-white hover:bg-gray-800"
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
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Group 2: Pages */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white-40 text-sm">
            Pages
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <Accordion className="gap-1">
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
