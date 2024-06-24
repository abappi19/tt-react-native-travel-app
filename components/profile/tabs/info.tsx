import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import ProfileTile from "./profile-tile";
import { router } from "expo-router";
import { AppRoutePath } from "@/constants/app-route/app-route-path";

const Info = () => {
  return (
    <View>
      <ProfileTile
        title="Personal Information"
        icon={<AntDesign name="user" size={22} />}
        onPress={() => router.push(AppRoutePath.profile.personalInfo)}
      />
      <ProfileTile
        title="Payments"
        icon={<MaterialIcons name="credit-card" size={22} />}
        onPress={() => router.push(AppRoutePath.profile.payments)}
      />
      <ProfileTile
        title="Settings"
        icon={<MaterialIcons name="settings" size={22} />}
        onPress={() => router.push(AppRoutePath.profile.settings)}
      />
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({});
