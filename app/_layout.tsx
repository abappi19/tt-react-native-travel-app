import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, router, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { ReactNode, useCallback, useEffect, useState } from "react";
import "react-native-reanimated";

import { AppRoutePath } from "@/constants/app-route/app-route-path";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ActivityIndicator, View } from "react-native";

export const unstable_settings = {
  // Ensure any route can link back to `/(tabs)`
  initialRouteName: AppRoutePath.initial,
};

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

export default function RootLayout() {
  const [isMounted, setIsMounted] = useState(false);
  const [moveToScreen, setMoveToScreen] = useState<null | string>(null);

  const colorScheme = useColorScheme();
  const pathName = usePathname();

  const statusBackground = useThemeColor({}, "background");

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
      return setMoveToScreen(AppRoutePath.tabs.home);
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

  const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {children}
    </ThemeProvider>
  );

  console.log(
    "font loaded: ",
    fontLoaded,
    "isMounted: ",
    isMounted,
    "onboarded: ",
    onboarded
  );

  if (!fontLoaded) return null;

  if (!isMounted) {
    return (
      <ThemeProviderWrapper>
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
      </ThemeProviderWrapper>
    );
  }

  return (
    <ThemeProviderWrapper>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            statusBarTranslucent: false,
            statusBarColor: statusBackground,
          }}
        />
        <Stack.Screen name="places" options={{ headerShown: false }} />
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="recommendations" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProviderWrapper>
  );
}
