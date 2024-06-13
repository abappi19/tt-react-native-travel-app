import { AppRoutePath } from "@/constants/app-route/app-route-path";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Button from "../button/button";

const ProfileGuestComponent = () => {
  function handleLoginClick() {
    router.push(AppRoutePath.authentication.signin);
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/graphics/guest-screen-image.png")}
        style={{
          width: "90%",
          aspectRatio: 1,
          height: 200,
        }}
      />
      <Button title="Signin or Register" onPress={handleLoginClick} />
    </View>
  );
};

export default ProfileGuestComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },
});
