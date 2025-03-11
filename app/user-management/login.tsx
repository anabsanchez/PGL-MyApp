import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function LogIn() {
  return (
    <View>
      <Text>Logging In...</Text>
      <Link href="./signup">Sign Up</Link>
    </View>
  );
}
const styles = StyleSheet.create({});
