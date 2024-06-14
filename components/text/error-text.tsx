import React from "react";
import { StyleSheet, Text } from "react-native";
import { match } from "ts-pattern";

const ErrorText = ({ field }: { field: any }) => {
  return match(!!field)
    .with(false, () => null)
    .otherwise(() => (
      <Text
        style={{
        //   flex: 1,
          flexWrap: "wrap",
          width: "100%",
          //   marginTop: -8,
          color: "red",
        }}
      >
        {field}
      </Text>
    ));
};

export default ErrorText;

const styles = StyleSheet.create({});
