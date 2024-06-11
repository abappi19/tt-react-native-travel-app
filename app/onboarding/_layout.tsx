import { Stack } from "expo-router";
export default function OnboardingLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          statusBarTranslucent: true,
        }}
      />
    </Stack>
  );
}
