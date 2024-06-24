import OnboardingItemView from "@/components/onboarding/onboarding-item-view";
import ProfileGuestComponent from "@/components/profile/profile-guest-component";
import SIZES from "@/constants/tokens/sizes";
import { useStoreUser } from "@/library/store/user";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";

export default function MessageScreen() {
  const { user, updateUser } = useStoreUser();

  if (!user) return <ProfileGuestComponent />;
  
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        resizeMode="contain"
        source={require("@/assets/images/graphics/guest-screen-image.png")}
        style={{
          width: "100%",
          height: 200,
        }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Nothing here !</Text>
    </View>
  );
}
