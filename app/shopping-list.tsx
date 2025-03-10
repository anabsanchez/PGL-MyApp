import { StyleSheet, View, Text, ScrollView, Pressable } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Icon from "react-native-vector-icons/Ionicons";
import ProductCard from "../components/ProductCard";
import Ionicons from "react-native-vector-icons/Ionicons";
import uuid from "react-native-uuid";
import { ProductCardProps } from "../components/ProductCard";

export default function ShoppingList() {
  const { colors } = useContext(ThemeContext);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [productList, setProductList] = useState<ProductCardProps[]>([]);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [units, setUnits] = useState<number>(0);
  const [price, setPrice] = useState<0>(0);
  const [added, setAdded] = useState<boolean>(false);

  const data = [
    {
      id: "1",
      name: "Yogurt",
      category: "Lácteo",
      units: 4,
      price: 1.3,
      added: false,
    },
    {
      id: "2",
      name: "Leche",
      category: "Lácteo",
      units: 1,
      price: 1.75,
      added: false,
    },
    {
      id: "3",
      name: "Croissant",
      category: "Panadería",
      units: 6,
      price: 3,
      added: false,
    },
  ];

  useEffect(() => {
    setProductList(data);
  }, []);

  const addNewItem = () => {
    setIsModalVisible(false);

    const newProductCard: ProductCardProps = {
      id: uuid.v4() as string, // Asegúrate de que uuid.v4() sea un string
      name,
      category,
      units,
      price,
      added,
    };
    const newList = [...productList, newProductCard];
    setProductList(newList);
  };

  const deleteItem = (id: string) => {
    const newProductList = productList.filter((item) => item.id !== id);
    setProductList(newProductList);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <View
        style={[styles.headerContainer, { backgroundColor: colors.secondary }]}
      >
        <Text style={[styles.headerText, { color: colors.primary }]}>
          Total: {total.toFixed(2)}€
        </Text>
        <Icon name="add" size={30} color={colors.primary} />
        <Icon name="trash" size={24} color={colors.primary} />
      </View>
      <Text style={[styles.text, { color: colors.secondary }]}>
        {productList.length === 0 ? "Your shopping list is empty" : "Products:"}
      </Text>
      <ScrollView>
        {productList.map((item) => (
          <View
            key={item.id}
            style={[
              styles.productCardContainer,
              { borderColor: colors.secondary },
            ]}
          >
            <Text style={[styles.text, { color: colors.secondary }]}>
              {item.name} ({item.units}) - {item.price.toFixed(2)}€/ud
            </Text>
            <View style={styles.productActions}>
              <Pressable onPress={() => setAdded(!added)}>
                {item.added ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={24}
                    color={colors.secondary}
                  />
                ) : (
                  <Ionicons
                    name="checkmark-circle-outline"
                    size={24}
                    color={colors.secondary}
                  />
                )}
              </Pressable>

              <Pressable onPress={() => deleteItem(item.id)}>
                <Ionicons
                  name="close-circle-outline"
                  size={24}
                  color={colors.secondary}
                />
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
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
  productCardContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderStyle: "solid",
    borderWidth: 1,
    margin: 6,
    padding: 8,
    borderRadius: 10,
    width: 350,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    opacity: 1,
  },
  productActions: {
    flexDirection: "row",
    gap: 10,
  },
});
