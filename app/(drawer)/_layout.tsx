import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import ThemeSwitch from "../../components/ThemeSwitch";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function DrawerLayout() {
  const { colors } = useContext(ThemeContext);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: true }}>
        <Drawer.Screen
          name="welcome"
          options={{
            headerTitle: "Home",
            headerShown: true,
            headerRight: () => <ThemeSwitch />,
            headerStyle: {
              backgroundColor: colors.secondary,
            },
            headerTintColor: colors.primary,
          }}
        />
        <Drawer.Screen
          name="portfolio"
          options={{
            headerTitle: "Portfolio",
            headerShown: true,
            headerRight: () => <ThemeSwitch />,
            headerStyle: {
              backgroundColor: colors.secondary,
            },
            headerTintColor: colors.primary,
          }}
        />
        <Drawer.Screen
          name="shopping-list"
          options={{
            headerTitle: "Shopping List",
            headerShown: true,
            headerRight: () => <ThemeSwitch />,
            headerStyle: {
              backgroundColor: colors.secondary,
            },
            headerTintColor: colors.primary,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({});
