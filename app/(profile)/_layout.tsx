import { Stack } from "expo-router";
export default function PlacesLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="payments"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="personal-info"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="settings"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
