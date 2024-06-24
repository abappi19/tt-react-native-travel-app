import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "@/constants/tokens/colors";
import { match } from "ts-pattern";

const Button = ({
  onPress,
  children,
  title,
  style,
  isLoading = false,
}: {
  onPress: () => void;
  children?: ReactNode;
  title?: string;
  style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: Colors.light.tint }, style]}
      onPress={onPress}
    >
      {match(isLoading)
        .with(true, () => <ActivityIndicator size={24} color="white" />)
        .otherwise(() =>
          match(!!children)
            .with(true, () => children)
            .otherwise(() => <Text style={styles.buttonText}>{title}</Text>)
        )}
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
