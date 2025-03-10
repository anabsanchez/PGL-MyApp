import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

type ProductCardProps = {
  id: string;
  name: string;
  category: string;
  units: number;
  price: number;
  added: boolean;
};

export default function ProductCard({
  id,
  name,
  category,
  units,
  price,
  added,
}: ProductCardProps) {
  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: colors.secondary,
          opacity: 0.8,
          backgroundColor: colors.primary,
        },
      ]}
    >
      <Text style={[styles.description, { color: colors.secondary }]}>
        {name} ({units}) - {price.toFixed(2)}€/ud
      </Text>
    </View>
  );
}

export { ProductCardProps };

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
