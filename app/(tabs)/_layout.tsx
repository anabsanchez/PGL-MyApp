import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Tabs } from "expo-router";
import { ThemeContext } from "../../contexts/ThemeContext";
import PortfolioHeader from "../../components/PortfolioHeader";

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
        }}
      />
      <Tabs.Screen
        name="repository"
        options={{
          headerShown: true,
          headerTitle: () => <PortfolioHeader />,
          headerStyle: { height: 120 },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
