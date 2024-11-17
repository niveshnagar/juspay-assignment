// src/components/ThemeToggle.tsx
import { useRecoilState } from "recoil";
import { themeAtom } from "../atoms/theme.atom";
import { useEffect } from "react";
import { Sun } from "lucide-react"; // Import the lightbulb icon from lucide-react

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return <Sun onClick={toggleTheme} className="text-[#1C1C1C] dark:text-white  h-7 w-7 p-1" />;
};

export default ThemeToggle;
