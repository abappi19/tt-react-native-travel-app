import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";

const Button = ({
  onPress,
  children,
  title,
  style,
}: {
  onPress: () => void;
  children?: ReactNode;
  title?: string;
  style?: StyleProp<ViewStyle>;
}) => {
  const tintColor = useThemeColor({}, "tint");
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: tintColor }, style]}
      onPress={onPress}
    >
      {children ? children : <Text style={styles.buttonText}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: "auto",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
