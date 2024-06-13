import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";

const MyTextInput = ({
  containerStyle,
  style,
  isPasswordInput = false,
  secureTextEntry,
  ...props
}: TextInputProps & {
  style?: StyleProp<TextStyle>;
  isPasswordInput?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}) => {
  const [secured, setSecured] = useState(false);

  useEffect(() => {
    setSecured(
      secureTextEntry === undefined ? !!isPasswordInput : secureTextEntry
    );
  }, [secureTextEntry]);

  return (
    <View
      style={{
        width: "100%",
        ...(containerStyle || ({} as any)),
      }}
    >
      <View
        style={{
          width: "100%",
          borderColor: "#ddd",
          borderWidth: 1,
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          textContentType={
            props.textContentType || isPasswordInput ? "password" : undefined
          }
          secureTextEntry={secured}
          {...props}
          style={{
            padding: 8,
            flex: 1,
            ...(style || ({} as any)),
          }}
        />

        {isPasswordInput && (
          <TouchableOpacity
            onPress={() => {
              setSecured((o) => !o);
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 8,
                marginEnd: 8,
                padding: 4,
                paddingEnd: 6,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons
                name={secured ? "eye" : "eye-off"}
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({});
