import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const MainLayout = () => {

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          statusBarTranslucent: false,
          // statusBarColor: statusBackground,
        }}
      />
      <Stack.Screen name="places" options={{ headerShown: false }} />
      <Stack.Screen name="hotels" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="recommendations" options={{ headerShown: false }} />
      <Stack.Screen name="nearby-hotels" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

export default MainLayout;

const styles = StyleSheet.create({});
