import { StyleSheet, View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Icon from "react-native-vector-icons/Ionicons";

export default function ShoppingList() {
  const { colors } = useContext(ThemeContext);
  const [total, setTotal] = useState(0);
  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <View
        style={[styles.headerContainer, { backgroundColor: colors.passive }]}
      >
        <Text style={[styles.headerText, { color: colors.primary }]}>
          Price: ${total.toFixed(2)}
        </Text>
        <Icon name="add" size={30} color={colors.primary} />
        <Icon name="trash" size={24} color={colors.primary} />
      </View>
      <Text style={[styles.text, { color: colors.passive }]}>
        Your shopping list is empty
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    gap: 30,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    height: 50,
    width: "100%",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    width: 280,
    marginHorizontal: 20,
  },
  text: {},
});
