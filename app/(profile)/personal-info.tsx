import AppBar from "@/components/app-bar/app-bar";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function PersonalInfoScreen() {
  return (
    <View>
      <AppBar
        title="Personal Information"
        onBackPressed={() => router.back()}
        // onSearch={() => {}}
      />
      <Text>Personal Info Screen</Text>
    </View>
  );
}
