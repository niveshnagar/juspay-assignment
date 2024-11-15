// NotificationSidebar.tsx
import { useRecoilValue } from "recoil";
import { notificationSidebarAtom } from "@/atoms/notificationSidebar.atom";

const NotificationSidebar = () => {
  const isOpen = useRecoilValue(notificationSidebarAtom);

  return isOpen ? (
    <div className="px-4 py-5 flex flex-col gap-4 bg-white  bg-opacity-10 w-[250px] h-screen">
      {/* Your notification sidebar content here */}
      <p>Notification Sidebar</p>
    </div>
  ) : null;
};

export default NotificationSidebar;
