import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import QRCode from "react-native-qrcode-svg";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function Repository() {
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
      <Text style={styles.headerText}>Check out my GitHub repository:</Text>
      <QRCode value="https://github.com/anabsanchez" size={100} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: "center",
    // verticalAlign: "middle",
    height: "100%",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
