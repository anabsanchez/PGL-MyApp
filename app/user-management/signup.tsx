import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

export default function SignUp() {
  const onRegister = () => {
    router.navigate("./login-page");
  };

  return (
    <View>
      <Text>Signing Up...</Text>
      <Button onPress={onRegister} title="Sign Up" />
    </View>
  );
}
const styles = StyleSheet.create({});
