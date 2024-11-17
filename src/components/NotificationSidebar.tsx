// NotificationSidebar.tsx
import { useRecoilValue } from "recoil";
import { Bug, UserRound, Radio } from "lucide-react"; // Import icons

import { notificationSidebarAtom } from "@/atoms/notificationSidebar.atom";

import Notification from "./Notification"; // Import your Notification component
import Contact from "./Contact";
import Activity from "./Activity";

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
    title: "Andi Lane subscribed to ...",
    time: "Today, 11:59 AM",
  },
];

const contacts = [
  {
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Natali Craig",
    fallback: "NC",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "James Smith",
    fallback: "JS",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Olivia Johnson",
    fallback: "OJ",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Liam Brown",
    fallback: "LB",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Emma Davis",
    fallback: "ED",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Noah Wilson",
    fallback: "NW",
  },
];

const activities = [
  {
    avatar: "https://github.com/shadcn.png",
    fallback: "CN",
    description: "Released a new version",
    time: "59 minutes ago",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    fallback: "JS",
    description: "Added a new feature",
    time: "1 hour ago",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    fallback: "AR",
    description: "Fixed a bug in production",
    time: "3 hours ago",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
    fallback: "BT",
    description: "Reviewed pull request",
    time: "Yesterday",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    fallback: "MG",
    description: "Updated documentation",
    time: "2 days ago",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/78.jpg",
    fallback: "RL",
    description: "Merged pull request",
    time: "3 days ago",
  },
];

const NotificationSidebar = () => {
  const isOpen = useRecoilValue(notificationSidebarAtom);

  return isOpen ? (
    <div className="bg-white border-[#1C1C1C1A] dark:bg-[#1C1C1C]  dark:border-white-10 text-[#1C1C1C] dark:text-white  p-4 flex flex-col flex-shrink-0 gap-6  w-[280px] overflow-auto scrollbar-none border-l ">
      {/* Notifications */}
      <div className="flex flex-col gap-2">
        <div className="px-1 py-2 leading-5 font-semibold">Notifications</div>
        {notifications.map((notification, index) => (
          <Notification
            key={index}
            icon={notification.icon}
            title={notification.title}
            time={notification.time}
          />
        ))}
      </div>

      {/* Activities */}
      <div className="flex flex-col gap-2">
        <div className="px-1 py-2 leading-5 font-semibold">Activities</div>
        {activities.map((activity, index) => (
          <div key={index}>
            {/* Render the activity */}
            <Activity
              avatar={activity.avatar}
              fallback={activity.fallback}
              description={activity.description}
              time={activity.time}
            />

            {/* Add the rotated divider except after the last activity */}
            {index < activities.length - 1 && (
              <div className="relative w-full h-0 flex justify-start mx-2 mb-1.5 m">
                <div className="bg-[#1C1C1C1A] dark:bg-[#FFFFFF1A]  w-4 h-0.5 transform rotate-90 rounded-lg"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contacts */}
      <div className="flex flex-col gap-2">
        <div className="px-1 py-2 leading-5 font-semibold">Contacts</div>
        {contacts.map((contact, index) => (
          <Contact
            key={index}
            avatar={contact.avatar}
            name={contact.name}
            fallback={contact.fallback}
          />
        ))}
      </div>
    </div>
  ) : null;
};

export default NotificationSidebar;
