import { router } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import AppBar from "@/components/app-bar/app-bar";
import Bookings from "@/components/profile/tabs/bookings";
import Info from "@/components/profile/tabs/info";
import Trips from "@/components/profile/tabs/trips";
import { AppRoutePath } from "@/constants/app-route/app-route-path";
import { Colors } from "@/constants/tokens/colors";
import SIZES from "@/constants/tokens/sizes";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useStoreUser } from "@/library/store/user";
import ProfileGuestComponent from "@/components/profile/profile-guest-component";

const ProfileScreen = () => {
  // "https://th.bing.com/th/id/R.cbe9c6caa4f9030112f28aa9df8e33e2?rik=zz8Nd6%2f5sOoypA&pid=ImgRaw&r=0"
  const { top } = useSafeAreaInsets();

  const { user } = useStoreUser();

  const Tab = createMaterialTopTabNavigator();

  if (!user) return <ProfileGuestComponent />;

  return (
    <>
      {/* <ScrollView
        onScroll={(e) => {
          // console.log(e.nativeEvent.contentOffset.y);
          setScrolled(e.nativeEvent.contentOffset.y > 200);
        }}
      > */}
      <View
        style={{
          position: "relative",
          height: getMinimumSize() * 0.6,
          width: getMinimumSize(),
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={styles.image}
          source={require("@/assets/images/hotel/hotel2.jpg")}
        />

        <Image
          style={styles.profileImage}
          source={{
            uri: user?.profileIcon,
          }}
        />

        <Text style={styles.username}>{user?.name}</Text>
        <Text style={styles.userEmail}>{user?.email}</Text>
      </View>
      {/* </ScrollView> */}

      <View style={{ flex: 1 }}>
        <Tab.Navigator style={{ flex: 1 }}>
          <Tab.Screen name="Bookings" component={Bookings} />
          <Tab.Screen name="Trips" component={Trips} />
          <Tab.Screen name="Info" component={Info} />
        </Tab.Navigator>
      </View>

      <AppBar
        style={{
          position: "absolute",
          zIndex: 999,
          top: 0,
          left: 0,
          right: 0,
          paddingTop: top,
          height: top + 48,
          backgroundColor: "transparent",
        }}
        title={"Profile"}
        titleColor="white"
        // onBackPressed={router.canGoBack() ? handleBackPressed : undefined}
        onSearch={() => {}}
      />

      {/* <View
        style={{
          position: "absolute",
          zIndex: 999,
          bottom: 0,
          left: 0,
          right: 0,
          // height: 48,
          // backgroundColor: "white",
        }}
      >
        <Button
          style={{ margin: 8 }}
          title="Find Best Hotels"
          onPress={handleBestHotelsClick}
        />
      </View> */}
    </>
  );
};

export default ProfileScreen;

const getMinimumSize = () => Math.min(SIZES.width, SIZES.height);

const styles = StyleSheet.create({
  username: {
    backgroundColor: "#00000071",
    color: "white",
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 16,
    marginTop: 4,
    fontWeight: "bold",
    fontSize: 16,
    textShadowColor: "#000",
    textShadowRadius: 5,
  },

  userEmail: {
    backgroundColor: Colors.light.tint,
    color: "white",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 16,
    marginTop: 4,
    // fontWeight: "bold",
    fontSize: 16,
  },
  profileImage: {
    height: 100,
    width: 100,
    borderColor: "#dddddd83",
    borderWidth: 2,
    borderRadius: 50,
    alignSelf: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    // borderRadius: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    paddingVertical: 16,
  },
  description: {
    // fontWeight: "bold",
    // fontSize: 24,
    paddingVertical: 16,
  },
  separator: {
    padding: 4,
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 8,
  },
  footer: {
    padding: 56,
  },
});
