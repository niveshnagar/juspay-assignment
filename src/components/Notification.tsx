import React from "react";
import { LucideIcon } from "lucide-react"; // Import the type for lucide-react icons

interface NotificationProps {
  icon: LucideIcon; // Icon component from lucide-react
  title: string; // Title of the notification
  time: string; // Time string for the notification
}

const Notification: React.FC<NotificationProps> = ({ icon: Icon, title, time }) => {
  return (
    <div className="flex flex-row p-1 gap-2">
      {/* Icon container */}
      <div className="h-6 w-6 flex items-center justify-center rounded-lg bg-customBlue text-black">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        {/* Notification title */}
        <div className="leading-5">{title}</div>
        {/* Notification time */}
        <div className="text-white-40 text-xs leading-[18px]">{time}</div>
      </div>
    </div>
  );
};

export default Notification;
