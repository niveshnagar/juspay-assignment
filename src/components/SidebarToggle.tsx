import { useSetRecoilState } from "recoil";
import { PanelLeft } from "lucide-react";

import { appSidebarAtom } from "@/atoms/appSidebar.atom";
import { notificationSidebarAtom } from "@/atoms/notificationSidebar.atom";

type SidebarType = "app" | "notification";

interface SidebarToggleProps {
  sidebarType: SidebarType; // Renamed the prop here
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ sidebarType }) => {
  // Select the appropriate atom based on the sidebarType
  const atom = sidebarType === "app" ? appSidebarAtom : notificationSidebarAtom;
  const setValue = useSetRecoilState(atom);

  // Toggle function
  const toggleSidebar = () => {
    setValue((prevState) => !prevState); // Toggle the state of the sidebar
  };

  return (
    <div>
      <PanelLeft className="h-7 w-7 p-1 cursor-pointer" onClick={toggleSidebar} />
    </div>
  );
};

export default SidebarToggle;
