import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import ProfileHeader from "../../components/ProfileHeader";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen name="hobbies" />
      <Tabs.Screen name="repository" />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
