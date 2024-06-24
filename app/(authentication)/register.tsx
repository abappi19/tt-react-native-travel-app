import Button from "@/components/button/button";
import MyTextInput from "@/components/input/my-text-input";
import { AppRoutePath } from "@/constants/app-route/app-route-path";
import SIZES from "@/constants/tokens/sizes";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";

import * as z from "zod";
// import { useServiceAuthRegister } from "@/library/service/auth.service";

const Register = () => {
  const registerService = {
    hookForm: null,
  };

  function handleSigninPress() {
    router.replace(AppRoutePath.authentication.signin);
  }

  return (
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            gap: 12,
          }}
        >
          <Image
            source={require("@/assets/images/graphics/guest-screen-image.png")}
            style={{
              width: "90%",
              aspectRatio: 1,
              height: 200,
            }}
          />
          <MyTextInput placeholder="Name" />
          <MyTextInput placeholder="Email" />
          <MyTextInput placeholder="New Password" />
          <MyTextInput placeholder="Confirm Password" />
          {/* <View style={{ flex: 1 }}> */}
          <Button
            style={{ width: "100%", padding: 8 }}
            title="REGISTER"
            onPress={() => {
              Alert.alert(
                "Oops!",
                "Fake API doesn't provide registration facilities."
              );
            }}
            isLoading={false}
          />
          {/* </View> */}
        </View>

        <View style={{ width: "100%", alignItems: "center", gap: 1 }}>
          <Text>Already have an Account?</Text>
          <Button
            style={{ width: "100%", padding: 8 }}
            title="SIGN IN"
            onPress={handleSigninPress}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: 8,
    paddingBottom: 26,
    minHeight: SIZES.height - 28,
  },
});
