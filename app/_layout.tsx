import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Stack } from "expo-router";
import ThemeProvider from "../providers/ThemeProvider";
import ThemeSwitch from "../components/ThemeSwitch";
import { ThemeContext } from "../contexts/ThemeContext";

export default function AppLayout() {
  const { colors } = useContext(ThemeContext);
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen
          name="welcome"
          options={{
            headerTitle: "Home",
            headerShown: true,
            headerRight: () => <ThemeSwitch />,
            headerStyle: {
              backgroundColor: colors.passive,
            },
            headerTintColor: colors.primary,
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerTitle: "Portfolio",
            headerShown: true,
            headerRight: () => <ThemeSwitch />,
            headerStyle: {
              backgroundColor: colors.passive,
            },
            headerTintColor: colors.primary,
          }}
        />
        <Stack.Screen
          name="shopping-list"
          options={{
            headerTitle: "Shopping List",
            headerShown: true,
            headerRight: () => <ThemeSwitch />,
            headerStyle: {
              backgroundColor: colors.passive,
            },
            headerTintColor: colors.primary,
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({});
