import { ReactNode } from "react";
import AppSidebar from "./components/AppSidebar";
import Navbar from "./components/Navbar";
import NotificationSidebar from "./components/NotificationSidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex w-screen h-screen bg-white dark:bg-black">
      {/* Left Sidebar */}
      <AppSidebar />

      {/* Center Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="bg-white  dark:bg-[#1C1C1C] flex-1 overflow-y-auto p-7 overflow-auto scrollbar-none">
          {children}
        </main>
      </div>

      {/* Right Sidebar */}
      <NotificationSidebar />
    </div>
  );
};

export default Layout;
