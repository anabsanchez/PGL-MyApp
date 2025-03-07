import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Redirect } from "expo-router";

export default function Welcome() {
  return (
    <View>
      <Text>Welcome aboard!</Text>
      <Link href="(tabs)/hobbies">Go to profile</Link>
    </View>
  );
}

const styles = StyleSheet.create({});
