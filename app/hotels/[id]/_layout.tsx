import { Stack } from "expo-router";
import { View } from "react-native";
export default function PlacesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          // statusBarTranslucent: true,
        }}
      />
      <Stack.Screen
        name="select-room"
        options={{
          headerShown: false,
          // statusBarTranslucent: true,
        }}
      />
    </Stack>
  );
}
