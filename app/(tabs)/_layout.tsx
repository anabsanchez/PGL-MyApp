import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Tabs } from "expo-router";
import { ThemeContext } from "../../contexts/ThemeContext";
import PortfolioHeader from "../../components/PortfolioHeader";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function _layout() {
  const { colors } = useContext(ThemeContext);

  return (
    <Tabs>
      <Tabs.Screen
        name="hobbies"
        options={{
          headerShown: true,
          headerTitle: () => <PortfolioHeader />,
          headerStyle: { height: 120 },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="brush-outline" size={size} color={color} />
          ),
          title: "Hobbies",
          tabBarActiveTintColor: colors.primary,
        }}
      />
      <Tabs.Screen
        name="repository"
        options={{
          headerShown: true,
          headerTitle: () => <PortfolioHeader />,
          headerStyle: { height: 120 },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="library-outline" size={size} color={color} />
          ),
          title: "Repository",
          tabBarActiveTintColor: colors.primary,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
