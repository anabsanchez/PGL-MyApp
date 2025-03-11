import React, { useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const themes = {
    light: {
      primary: "#FF888A",
      secondary: "#FFFFFF",
      tertiary: "#000000",
      fixed: "#FF888A",
      exception: "#FFFFFF",
    },
    dark: {
      primary: "#844041",
      secondary: "#000000",
      tertiary: "#FFFFFF",
      fixed: "#FF888A",
      exception: "#FF888A",
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
