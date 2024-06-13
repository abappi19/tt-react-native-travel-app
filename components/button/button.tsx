import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "@/constants/tokens/colors";

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
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: Colors.light.tint }, style]}
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
