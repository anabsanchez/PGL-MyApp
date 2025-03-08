import { Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Icon from "react-native-vector-icons/Ionicons";

export default function ThemeSwitch() {
  const { switchTheme, theme } = useContext(ThemeContext);

  const themeIcon = theme === "light" ? "moon" : "sunny";

  return (
    <TouchableOpacity onPress={switchTheme}>
      <Icon name={themeIcon} size={25} color="black" />
    </TouchableOpacity>
  );
}
