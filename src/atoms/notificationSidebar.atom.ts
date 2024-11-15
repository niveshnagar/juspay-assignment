import { atom } from "recoil";

// Create the atom with the correct type
export const notificationSidebarAtom = atom<boolean>({
  key: "notificationSidebarAtom",
  default: true,
});
