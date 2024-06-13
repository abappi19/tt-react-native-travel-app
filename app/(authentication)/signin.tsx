import Button from "@/components/button/button";
import MyTextInput from "@/components/input/my-text-input";
import { AppRoutePath } from "@/constants/app-route/app-route-path";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Signin = () => {
  function handleSigninPress() {
  }
  function handleRegisterPress() {
    router.replace(AppRoutePath.authentication.register);
  }
  return (
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
        <MyTextInput
          style={{}}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <MyTextInput
          inputMode="text"
          passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
          isPasswordInput={true}
          style={{}}
          placeholder="Password"
        />

        {/* <View style={{ flex: 1 }}> */}
        <Button
          style={{ width: "100%", padding: 8 }}
          title="SIGN IN"
          onPress={handleSigninPress}
        />
        {/* </View> */}
      </View>

      <Button
        style={{ width: "100%", padding: 8 }}
        title="REGISTER"
        onPress={handleRegisterPress}
      />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: 8,
    paddingBottom: 26,
  },
});
