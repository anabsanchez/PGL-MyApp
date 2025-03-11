import { StyleSheet, Text, View, Image } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const profileImage = require("../assets/portfolio/profile-pic.jpeg");

export default function PortfolioHeader() {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={styles.headerContainer}>
      <Image source={profileImage} style={styles.profileImage} />
      <Text style={[styles.headerText, { color: colors.primary }]}>
        I'm just a girl in the world... That's all that you'll let me
        beeeEeEEeeE 🚀 Oh, I'm just a girl living in captivity. Your rule of
        thumb makes me worry soOoOOome!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  headerText: {
    fontSize: 14,
    fontWeight: "bold",
    width: 280,
  },
});
