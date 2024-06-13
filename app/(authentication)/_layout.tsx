import { Stack } from "expo-router";
import { View } from "react-native";
export default function PlacesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="signin"
        options={{
          headerShown: false,
          // statusBarTranslucent: true,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          headerShown: false,
          // statusBarTranslucent: true,
        }}
      />
    </Stack>
  );
}
