import { Stack } from "expo-router";
import { View } from "react-native";
export default function PlacesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="normal-search"
        options={{
          headerShown: false,
          // statusBarTranslucent: true,
        }}
      />
      <Stack.Screen
        name="hotel-search"
        options={{
          headerShown: false,
          // statusBarTranslucent: true,
        }}
      />
    </Stack>
  );
}
