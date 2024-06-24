import { Stack } from "expo-router";
export default function RecommendationsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Recommendations",
          headerShown: false,
        }}
      />

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
