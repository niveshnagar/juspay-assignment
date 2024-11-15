// src/components/ThemeToggle.tsx
import { useRecoilState } from "recoil";
import { themeAtom } from "../atoms/theme.atom";
import { useEffect } from "react";
import { MoonIcon } from "lucide-react"; // Import the lightbulb icon from lucide-react

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useRecoilState(themeAtom);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {/* Use the Bulb icon */}
      <MoonIcon size={24} color={theme === "light" ? "black" : "yellow"} />
    </button>
  );
};

export default ThemeToggle;
