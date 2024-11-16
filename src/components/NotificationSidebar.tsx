// NotificationSidebar.tsx
import { useRecoilValue } from "recoil";
import { Bug, UserRound, Radio  } from "lucide-react"; // Import icons

import Notification from "./Notification"; // Import your Notification component
import { notificationSidebarAtom } from "@/atoms/notificationSidebar.atom";

const notifications = [
  {
    icon: Bug,
    title: "You have a bug that need...",
    time: "Just now",
  },
  {
    icon: UserRound,
    title: "New user registered",
    time: "59 mins ago",
  },
  {
    icon: Bug,
    title: "You have a bug that need...",
    time: "12 hours ago",
  },
  {
    icon: Radio,
    title: "Andi Lane subscribed to y...",
    time: "Today, 11:59 AM",
  },
];

const NotificationSidebar = () => {
  const isOpen = useRecoilValue(notificationSidebarAtom);

  return isOpen ? (
    <div className="p-4 flex flex-col gap-6 bg-white bg-opacity-10 w-[280px] h-screen border-l border-white-10">
      {/* Notification */}
      <div className="flex flex-col gap-2">
        <div className="px-1 py-2 leading-5">Notifications</div>
        {/* One demo notification */}
        {notifications.map((notification, index) => (
          <Notification
            key={index}
            icon={notification.icon}
            title={notification.title}
            time={notification.time}
          />
        ))}
        <div></div>
        <div></div>
      </div>
      {/* Activities */}
      {/* Contacts */}
    </div>
  ) : null;
};

export default NotificationSidebar;
