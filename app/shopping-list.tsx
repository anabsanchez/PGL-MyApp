import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Icon from "react-native-vector-icons/Ionicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import uuid from "react-native-uuid";
import ProductModal from "../components/ProductModal";
import categoryImages from "../assets/category-images";
type Product = {
  id: string;
  name: string;
  category: string;
  units: number;
  price: number;
  added: boolean;
};

export default function ShoppingList() {
  const { colors } = useContext(ThemeContext);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [productToEdit, setProductToEdit] = useState<Product | null>(null);
  const [productList, setProductList] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [units, setUnits] = useState<number>(0);
  const [price, setPrice] = useState<0>(0);

  const data = [
    {
      id: "1",
      name: "Yogurt",
      category: "Dairy",
      units: 4,
      price: 1.3,
      added: false,
    },
    {
      id: "2",
      name: "Leche",
      category: "Dairy",
      units: 1,
      price: 1.75,
      added: false,
    },
    {
      id: "3",
      name: "Croissant",
      category: "Bakery",
      units: 6,
      price: 3,
      added: false,
    },
  ];

  useEffect(() => {
    setProductList(data);
  }, []);

  const createProduct = () => {
    setIsModalVisible(false);

    const newProductCard = {
      id: uuid.v4() as string,
      name,
      category,
      units,
      price,
      added: false,
    };
    const newList = [...productList, newProductCard];
    setProductList(newList);
  };

  const deleteItem = (id: string) => {
    const newProductList = productList.filter((item) => item.id !== id);
    setProductList(newProductList);
    updateTotal(newProductList);
  };

  const toggleAdded = (id: string) => {
    const updatedList = productList.map((item) =>
      item.id === id ? { ...item, added: !item.added } : item
    );

    setProductList(updatedList);
    updateTotal(updatedList);
  };

  const updateTotal = (updatedList: Product[]) => {
    const newTotal = updatedList
      .filter((item) => item.added)
      .reduce((sum, item) => sum + item.price * item.units, 0);

    setTotal(newTotal);
  };
  const clearList = () => {
    setProductList([]);
    setTotal(0);
  };

  const openModalForNewProduct = () => {
    setProductToEdit(null);
    setIsModalVisible(true);
  };

  const openModalForEdit = (product: Product) => {
    setProductToEdit(product);
    setIsModalVisible(true);
  };
  const handleSaveProduct = (product: Product) => {
    if (productToEdit) {
      setProductList((prevList) =>
        prevList.map((item) => (item.id === product.id ? product : item))
      );
    } else {
      setProductList((prevList) => [...prevList, product]);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      <View
        style={[styles.headerContainer, { backgroundColor: colors.secondary }]}
      >
        <Text style={[styles.headerText, { color: colors.primary }]}>
          Total: {total.toFixed(2)}€
        </Text>
        <Icon
          name="add"
          size={30}
          color={colors.primary}
          onPress={openModalForNewProduct}
        />
        <Icon
          name="trash"
          size={24}
          color={colors.primary}
          onPress={clearList}
        />
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
            <Image
              source={categoryImages[item.category]}
              style={styles.image}
            />
            <Text
              style={[styles.text, { color: colors.secondary }]}
              onLongPress={() => openModalForEdit(item)}
            >
              {item.name} ({item.units}) - {item.price.toFixed(2)}€/ud
            </Text>
            <View style={styles.productActions}>
              <Pressable onPress={() => toggleAdded(item.id)}>
                <Ionicons
                  name={
                    item.added ? "checkmark-circle" : "checkmark-circle-outline"
                  }
                  size={24}
                  color={colors.secondary}
                />
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
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSave={handleSaveProduct}
        productToEdit={productToEdit}
      />
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
    borderWidth: 2,
    margin: 6,
    padding: 8,
    borderRadius: 10,
    width: 350,
    overflow: "hidden",
  },
  image: {
    position: "absolute",
    opacity: 0.6,
    borderRadius: 10,
    width: 350,
    height: 42,
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
