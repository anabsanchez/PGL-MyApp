import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

export default function StartPage() {
  return <Redirect href="home" />;
}

const styles = StyleSheet.create({});
