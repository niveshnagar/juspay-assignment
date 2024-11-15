import { atom } from "recoil";

type Theme = "light" | "dark";

// Create the atom with the correct type
export const themeAtom = atom<Theme>({
  key: "themeAtom",
  default: (localStorage.getItem("theme") as Theme) || "light",
});
