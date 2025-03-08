import { createContext } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  switchTheme: () => void;
  colors: {
    primary: string;
    secondary: string;
  };
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  switchTheme: () => {},
  colors: {
    primary: "#FF888A",
    secondary: "#FFFFFF",
  },
});
