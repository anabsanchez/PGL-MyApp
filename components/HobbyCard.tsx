import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

type HobbyCardProps = {
  description: string;
};

const HobbyCard = ({ description }: HobbyCardProps) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: colors.secondary,
          opacity: 0.7,
          backgroundColor: colors.secondary,
        },
      ]}
    >
      <Text style={[styles.description, { color: colors.passive }]}>
        {description}
      </Text>
    </View>
  );
};

export default HobbyCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    borderStyle: "solid",
    borderWidth: 1,
    margin: 6,
    padding: 8,
    borderRadius: 10,
    textAlign: "justify",
    width: 300,
  },
  description: {
    fontSize: 18,
    fontWeight: "bold",
    opacity: 1,
  },
});
