import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { Tabs } from "expo-router";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function _layout() {
  const { colors } = useContext(ThemeContext);
  return (
    <Tabs>
      <Tabs.Screen name="hobbies" />
      <Tabs.Screen
        name="repository"
        options={{
          headerTintColor: colors.secondary,
          headerStyle: { backgroundColor: colors.primary },
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
