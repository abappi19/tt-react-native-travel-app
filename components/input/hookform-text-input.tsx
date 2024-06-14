import React from "react";
import {
  Controller,
  FieldPath,
  FieldValues,
  UseFormReturn,
  get,
} from "react-hook-form";
import {
  StyleProp,
  StyleSheet,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import ErrorText from "../text/error-text";
import MyTextInput from "./my-text-input";

function HookformTextInput<TFieldValues extends FieldValues>({
  name,
  hookForm,
  ...props
}: TextInputProps & {
  style?: StyleProp<TextStyle>;
  isPasswordInput?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  name: FieldPath<TFieldValues>;
  hookForm: UseFormReturn<TFieldValues>;
}) {
  const {
    control,
    formState: { errors },
  } = hookForm;

  const errorMessgae = get(errors, name)?.message || "";

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onBlur, onChange } }) => (
        <View
          style={{
            width: "100%",
          }}
        >
          <MyTextInput
            {...props}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
          />
          <ErrorText field={errorMessgae} />
        </View>
      )}
    />
  );
}

export default HookformTextInput;

const styles = StyleSheet.create({});
