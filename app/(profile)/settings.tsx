import AppBar from "@/components/app-bar/app-bar";
import SettingTile from "@/components/setting-tile/setting-tile";
import { router } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function SettingsScreen() {
  return (
    <View>
      <AppBar title="Settings" onBackPressed={() => router.back()} />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Account Settings</Text>
          <SettingTile
            title="Language"
            title2="🇺🇸 English"
            onPress={() => {}}
          />
          <SettingTile title="Country" title2="USA" onPress={() => {}} />
          <SettingTile title="Currency" title2="USD" onPress={() => {}} />

          <Text style={styles.title}>Support</Text>

          <SettingTile title="Get help" title2="" onPress={() => {}} />
          <SettingTile title="Give a feedback" title2="" onPress={() => {}} />

          <Text style={styles.title}>Legal</Text>

          <SettingTile title="Terms of service" title2="" onPress={() => {}} />
          <SettingTile title="Privacy Policy" title2="" onPress={() => {}} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 12,
  },
});
