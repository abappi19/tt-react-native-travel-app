import { Stack } from "expo-router";
import { View } from "react-native";
export default function PlacesLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="[id]"
          options={{
            title: "",
            headerShown: true,
            headerBackVisible: true,
          }}
        />
      </Stack>
    </View>
  );
}
