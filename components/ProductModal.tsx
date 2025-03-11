import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

type Product = {
  id: string;
  name: string;
  category: string;
  units: number;
  price: number;
  added: boolean;
};

type ProductModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
  productToEdit?: Product | null;
};

const categories = [
  "Dairy",
  "Bakery",
  "Fruits",
  "Veggies",
  "Fish",
  "Meats",
  "Drinks",
];

const ProductModal: React.FC<ProductModalProps> = ({
  visible,
  onClose,
  onSave,
  productToEdit,
}) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(categories[0]); // Valor inicial
  const [units, setUnits] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setCategory(productToEdit.category);
      setUnits(productToEdit.units.toString());
      setPrice(productToEdit.price.toString());
    } else {
      setName("");
      setCategory(categories[0]);
      setUnits("");
      setPrice("");
    }
  }, [productToEdit, visible]);

  const handleSave = () => {
    if (!name || !category || !units || !price) {
      alert("All fields must be filled (rima xd)");
      return;
    }

    const newProduct: Product = {
      id: productToEdit ? productToEdit.id : Math.random().toString(),
      name,
      category,
      units: parseInt(units),
      price: parseFloat(price),
      added: productToEdit ? productToEdit.added : false,
    };

    onSave(newProduct);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>
            {productToEdit ? "Edit" : "New product"}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <Picker
            selectedValue={category}
            onValueChange={(itemValue) => setCategory(itemValue)}
            style={styles.picker}
          >
            {categories.map((cat) => (
              <Picker.Item key={cat} label={cat} value={cat} />
            ))}
          </Picker>
          <TextInput
            style={styles.input}
            placeholder="Units"
            value={units}
            onChangeText={setUnits}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Unit price"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />

          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: "gray",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ProductModal;
