import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useContext } from "react";
import { Link } from "expo-router";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Welcome() {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <Image
        source={require("../../assets/welcome/rocket_light.png")}
        style={styles.image}
      />
      <Text style={[styles.title, { color: colors.exception }]}>
        Welcome aboard!
      </Text>
      <View style={styles.buttonsContainer}>
        <Link href="portfolio/hobbies" asChild>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: colors.primary, opacity: 0 },
            ]}
          >
            <Text style={[styles.buttonText, { color: colors.exception }]}>
              Go to Portfolio
            </Text>
          </TouchableOpacity>
        </Link>

        <Link href="shopping-list" asChild>
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: colors.primary, opacity: 0 },
            ]}
          >
            <Text style={[styles.buttonText, { color: colors.exception }]}>
              Go to Shopping List
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 150,
    marginBottom: -200,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
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
