import AppBar from "@/components/app-bar/app-bar";
import { router } from "expo-router";
import { Text, View } from "react-native";

export default function PaymentsScreen() {
  return (
    <View>
      <AppBar
        title="Payments"
        onBackPressed={() => router.back()}
      />
      <Text>Payments Screen</Text>
    </View>
  );
}
