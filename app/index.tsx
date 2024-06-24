import { AppRoutePath } from "@/constants/app-route/app-route-path";
import { useStoreOnboarded } from "@/library/store/onboard";
import { Redirect, usePathname } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { match } from "ts-pattern";

const Index = () => {
  const [moveToScreen, setMoveToScreen] = useState<null | string>(null);
  const [isMounted, setIsMounted] = useState(false);

  // const colorScheme = useColorScheme();

  const pathName = usePathname();

  const { isOnboarded } = useStoreOnboarded();

  const handleRouting = useCallback(() => {
    console.log("handle routing called");
    if (!isOnboarded) {
      return setMoveToScreen(AppRoutePath.onboarding);
    }
    if (pathName === "/") {
      //   return setMoveToScreen(AppRoutePath.tabs.location);
    }
  }, []);

  useEffect(() => {
    handleRouting();
    setIsMounted(true);
  }, []);

  return match(isMounted)
    .with(false, () => (
      <View
        style={{
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size={32} />
      </View>
    ))
    .otherwise(() =>
      match(moveToScreen)
        .with(null, () => <Redirect href={AppRoutePath.tabs.home} />)
        .otherwise(() => <Redirect href={moveToScreen as string} />)
    );
};

export default Index;

const styles = StyleSheet.create({});
