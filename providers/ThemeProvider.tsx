import React, { useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const themes = {
    light: {
      primary: "#FF888A",
      secondary: "#7B4344",
      active: "#000000",
      passive: "#FFFFFF",
    },
    dark: {
      primary: "#7B4344",
      secondary: "#FF888A",
      active: "#FFFFFF",
      passive: "#000000",
    },
  };

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{ theme, switchTheme, colors: themes[theme] }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
