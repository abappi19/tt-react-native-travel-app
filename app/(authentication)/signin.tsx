import Button from "@/components/button/button";
import HookformTextInput from "@/components/input/hookform-text-input";
import { AppRoutePath } from "@/constants/app-route/app-route-path";
import SIZES from "@/constants/tokens/sizes";
import { useLoginOnComplete } from "@/library/hooks/auth/use-login-on-complete";
import { useServiceAuthLogin } from "@/library/service/auth.service";
import { useStoreUser } from "@/library/store/user";
import { router } from "expo-router";
import React from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";

// const {manifest} = Constants;

const Signin = () => {
  // const { user, updateUser } = useStoreUser();
  const {onComplete} = useLoginOnComplete();

  const LoginAuthService = useServiceAuthLogin({
    onComplete(data) {
      if (data.message === "failed") {
        Alert.alert(
          "Oops!",
          "Failed to login. Please confirm username and password and try again."
        );
        return;
      }
      onComplete(data);
    },
  });

  function handleRegisterPress() {
    router.replace(AppRoutePath.authentication.register);
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
            hookForm={LoginAuthService.hookForm}
            name="email"
            placeholder="Email"
          />

          <HookformTextInput
            hookForm={LoginAuthService.hookForm}
            name="password"
            isPasswordInput={true}
            placeholder="Password"
          />

          {/* <View style={{ flex: 1 }}> */}
          <Button
            style={{ width: "100%", padding: 8 }}
            title="SIGN IN"
            onPress={LoginAuthService.onSubmit}
            isLoading={LoginAuthService.isLoading}
          />
          {/* </View> */}
        </View>

        <View style={{ width: "100%", alignItems: "center", gap: 2 }}>
          <Text>Don't have an Account?</Text>
          <Button
            style={{ width: "100%", padding: 8 }}
            title="REGISTER"
            onPress={handleRegisterPress}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Signin;

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
