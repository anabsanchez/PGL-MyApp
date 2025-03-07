import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useContext } from "react";
import { Link, Redirect } from "expo-router";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Welcome() {
  const currentTheme = useContext(ThemeContext);
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: currentTheme.colors.primary },
      ]}
    >
      <Image
        source={
          currentTheme.theme
            ? require("../assets/welcome/rocket_light.png")
            : require("../assets/welcome/rocket_dark.png")
        }
        style={styles.image}
      />
      <Text style={[styles.title, { color: currentTheme.colors.secondary }]}>
        Welcome aboard!
      </Text>
      <Link href="(tabs)/hobbies" asChild>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: currentTheme.colors.secondary },
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              { color: currentTheme.colors.secondary },
            ]}
          >
            Go to Profile
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 200,
    marginBottom: -200,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 200,
    minHeight: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  image: {
    position: "absolute",
    opacity: 0.4,
  },
});
