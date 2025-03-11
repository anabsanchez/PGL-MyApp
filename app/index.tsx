import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";
import { asyncStorageService } from "../services/async-storage-service";

export default async function StartPage() {
  const USER_TOKEN_KEY = asyncStorageService.KEYS.userToken;

  let destinationRoute = "";
  // const token = await asyncStorageService.get<string>(USER_TOKEN_KEY);
  const token = "valid-token";
  if (token !== null) {
    destinationRoute = "/(drawer)/welcome";
  } else {
    destinationRoute = "/user-management/login";
  }

  return <Redirect href={destinationRoute} />;
}

const styles = StyleSheet.create({});
