import { Stack } from "expo-router";
import { View } from "react-native";
export default function PlacesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerShown: false,
          statusBarTranslucent: true,
        }}
      />
    </Stack>
  );
}
