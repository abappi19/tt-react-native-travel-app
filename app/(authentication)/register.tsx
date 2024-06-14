import Button from "@/components/button/button";
import MyTextInput from "@/components/input/my-text-input";
import { AppRoutePath } from "@/constants/app-route/app-route-path";
import SIZES from "@/constants/tokens/sizes";
import { zodResolver } from "@hookform/resolvers/zod";
import { router } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";

import HookformTextInput from "@/components/input/hookform-text-input";
import * as z from "zod";
import { useServiceAuthRegister } from "@/library/service/auth.service";

const Register = () => {
  const registerService = useServiceAuthRegister();

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
          <HookformTextInput
            hookForm={registerService.hookForm}
            name="name"
            placeholder="Name"
          />
          <HookformTextInput
            hookForm={registerService.hookForm}
            name="email"
            placeholder="Email"
          />
          <HookformTextInput
            hookForm={registerService.hookForm}
            name="newPassword"
            placeholder="New Password"
          />
          <HookformTextInput
            hookForm={registerService.hookForm}
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          {/* <View style={{ flex: 1 }}> */}
          <Button
            style={{ width: "100%", padding: 8 }}
            title="REGISTER"
            onPress={registerService.onSubmit}
            isLoading={registerService.isLoading}
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
