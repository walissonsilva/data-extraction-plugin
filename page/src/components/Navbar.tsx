import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { Toggle } from "./ui/toggle";

export const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function applyTheme(isDark: boolean) {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  function toggleTheme() {
    const isDark = !isDarkTheme;
    setIsDarkTheme((isDarkTheme) => !isDarkTheme);

    applyTheme(isDark);
    localStorage.setItem("darkTheme", String(isDark));

    const themeChangeCount = localStorage.getItem("themeChangeCount") || 0;
    localStorage.setItem(
      "themeChangeCount",
      String(Number(themeChangeCount) + 1)
    );
  }

  useEffect(() => {
    const isDarkThemeStorage = localStorage.getItem("darkTheme");

    if (isDarkThemeStorage != null) {
      const isDark = JSON.parse(isDarkThemeStorage);
      setIsDarkTheme(isDark);
      applyTheme(isDark);
    }
  }, []);

  return (
    <nav className="background border-b-primary-200 dark:border-b-muted border-b-[1px] border-solid h-20 flex items-center justify-center">
      <motion.div
        className="flex justify-center items-center gap-4 relative flex-1 leading-9"
        initial={{ transform: "translateY(-40px)", opacity: 0 }}
        animate={{ transform: "translateY(0)", opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <ul className="sm:flex hidden items-center gap-4">
          <li>
            <a href="#about">Sobre mim</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#blog">Postagens</a>
          </li>

          <li className="absolute top-0 right-4">
            <Toggle
              className="border-[1px] border-solid border-primary dark:border-primary rounded-md"
              aria-label="Alterar tema"
              onClick={toggleTheme}
            >
              {isDarkTheme ? (
                <FiSun className="text-primary" />
              ) : (
                <FiMoon className="text-primary" />
              )}
            </Toggle>
          </li>
        </ul>

        <ul className="flex justify-end flex-1 sm:hidden pr-4">
          <li>
            <Toggle>
              <FiMenu size={20} />
            </Toggle>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};
