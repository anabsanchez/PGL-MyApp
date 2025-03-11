import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import ThemeProvider from "../providers/ThemeProvider";
import { Slot } from "expo-router";

export default function AppLayout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
