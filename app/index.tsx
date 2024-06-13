import { AppRoutePath } from "@/constants/app-route/app-route-path";
import { useFonts } from "expo-font";
import { Redirect, SplashScreen, router, usePathname } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  useColorScheme,
} from "react-native";
import { match } from "ts-pattern";

// LogBox.ignoreAllLogs();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const hideSplashScreen = async () => {
  try {
    const hideSplash = setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);

    return () => {
      clearTimeout(hideSplash);
    };
  } catch (error) {
    console.log("Error hiding splash screen:", error);
  }
};

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [moveToScreen, setMoveToScreen] = useState<null | string>(null);

  const colorScheme = useColorScheme();
  const pathName = usePathname();

  const [fontLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const onboarded = true;

  const handleRouting = useCallback(() => {
    console.log("handle routing called");
    if (!onboarded) {
      return setMoveToScreen(AppRoutePath.onboarding);
    }
    if (pathName === "/") {
      //   return setMoveToScreen(AppRoutePath.tabs.location);
    }
  }, []);

  const onLaunch = useCallback(async () => {
    console.log("on launch called");
    if (fontLoaded) {
      await hideSplashScreen();
      handleRouting();
      setIsMounted(true);
    }
  }, [fontLoaded]);

  useEffect(() => {
    if (!isMounted) return;

    if (!moveToScreen) return;
    const ms = moveToScreen;
    setMoveToScreen(null);
    router.replace(ms);
  }, [moveToScreen, isMounted, pathName]);

  useEffect(() => {
    onLaunch();
  }, [onLaunch]);

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
