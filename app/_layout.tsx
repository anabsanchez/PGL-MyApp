import { StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import ThemeProvider from "../providers/ThemeProvider";
import ThemeSwitch from "../components/ThemeSwitch";

export default function AppLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen
          name="welcome"
          options={{
            headerTitle: "Home",
            headerShown: true,
            headerRight: () => <ThemeSwitch />,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{ headerTitle: "Portfolio", headerShown: true }}
        />
      </Stack>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
