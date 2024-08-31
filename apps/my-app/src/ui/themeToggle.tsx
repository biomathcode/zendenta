"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-background absolute left-0 ">
      The current theme is: {theme}
      <br />
      {theme === "light" && (
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      )}
      {theme === "dark" && (
        <button onClick={() => setTheme("light")}>Light Mode</button>
      )}
      <br />
    </div>
  );
};

export default ThemeSwitcher;
