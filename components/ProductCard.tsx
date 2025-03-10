import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

type ProductCardProps = {
  name: string;
  category: string;
  units: number;
  price: number;
  added: boolean;
};

const ProductCard = ({
  name,
  category,
  units,
  price,
  added,
}: ProductCardProps) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: colors.passive,
          opacity: 0.8,
          backgroundColor: colors.passive,
        },
      ]}
    >
      <Text style={[styles.description, { color: colors.primary }]}>
        {name}
      </Text>
    </View>
  );
};

export default ProductCard;

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
