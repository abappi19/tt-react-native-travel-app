import { AppRoutePath } from "@/constants/app-route/app-route-path";
import { Colors } from "@/constants/tokens/colors";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useCallback, useEffect, useState } from "react";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: AppRoutePath.initial,
};

// LogBox.ignoreAllLogs();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const hideSplashScreen = () => {
  try {
    const hideSplash = setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 2000);

    return () => {
      clearTimeout(hideSplash);
    };
  } catch (error) {
    console.log("Error hiding splash screen:", error);
  }
};

const App = () => {
  const [fontLoaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const onLaunch = useCallback(() => {
    if (fontLoaded) {
      return hideSplashScreen();
    }
  }, [fontLoaded]);

  useEffect(() => {
    return onLaunch();
  }, [onLaunch]);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootLayout />

        <StatusBar style="light" />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

const RootLayout = () => {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          // statusBarTranslucent: false,
          // statusBarColor: Colors.dark.background,
          statusBarStyle: "dark",
        }}
      />

      <Stack.Screen
        name="(authentication)"
        options={{ headerShown: false, statusBarStyle: "dark" }}
      />
      <Stack.Screen
        name="(search)"
        options={{
          headerShown: false,
          // statusBarTranslucent: false,
          // statusBarColor: Colors.dark.background,
          statusBarStyle: "dark",
        }}
      />
      <Stack.Screen
        name="places"
        options={{ headerShown: false, statusBarStyle: "dark" }}
      />
      <Stack.Screen
        name="hotels"
        options={{ headerShown: false, statusBarStyle: "dark" }}
      />
      <Stack.Screen
        name="onboarding"
        options={{ headerShown: false, statusBarStyle: "dark" }}
      />
      <Stack.Screen
        name="recommendations"
        options={{ headerShown: false, statusBarStyle: "dark" }}
      />
      <Stack.Screen
        name="nearby-hotels"
        options={{ headerShown: false, statusBarStyle: "dark" }}
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

export default App;
