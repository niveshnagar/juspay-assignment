import { atom } from "recoil";

// Create the atom with the correct type
export const appSidebarAtom = atom<boolean>({
  key: "appSidebarAtom",
  default: true,
});
