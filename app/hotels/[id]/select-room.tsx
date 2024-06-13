import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "@/components/app-bar/app-bar";
import { router, useLocalSearchParams } from "expo-router";
import { AppRoutePath } from "@/constants/app-route/app-route-path";

const SelectRoom = () => {
  const { id } = useLocalSearchParams();

  const handleBackPressed = () => {
    // if (router.canGoBack())
    router.back();
    // router.push(AppRoutePath.hotels.initial(Number(id)));
  };
  return (
    <SafeAreaView>
      <View>
        <AppBar
          onBackPressed={router.canGoBack() ? handleBackPressed : undefined}
          title="Select Room"
        />
        <Text>Select Room</Text>
      </View>
    </SafeAreaView>
  );
};

export default SelectRoom;

const styles = StyleSheet.create({});
