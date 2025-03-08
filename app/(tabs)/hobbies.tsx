import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import HobbyCard from "../../components/HobbyCard";
import hobbiesData from "../../data/hobbies-list";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Hobbies() {
  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.primary,
        },
      ]}
    >
      <Text style={styles.headerText}>
        Now, here's some of the stuff I enjoy:
      </Text>
      <FlatList
        data={hobbiesData}
        renderItem={({ item }) => <HobbyCard description={item.text} />}
        keyExtractor={(item, index) => `${index}-${item.text}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18, // Aumenta el tamaño de la fuente
    fontWeight: "bold", // Hace que el texto sea negrita
    marginBottom: 10, // Añade un poco de espacio debajo del texto
  },
});
