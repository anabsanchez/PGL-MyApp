import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

export default function StartPage() {
  return <Redirect href="welcome" />;
}

const styles = StyleSheet.create({});
