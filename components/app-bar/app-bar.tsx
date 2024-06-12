import SIZES from "@/constants/tokens/sizes";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import SearchComponent from "../search/search-component";

type AppBarType = {
  onSearch?: (text: string) => void;
  title?: string;
  onBackPressed?: () => void;
  style?: StyleProp<ViewStyle>;
  titleColor?: string;
};

const AppBar = ({
  onSearch,
  title = "",
  onBackPressed,
  style,
  titleColor = "black",
}: AppBarType) => {
  const [open, setOpen] = useState(false);
  return (
    <View
      style={{
        ...styles.container,
        ...(style || ({} as any)),
      }}
    >
      {onBackPressed && (
        <TouchableOpacity onPress={onBackPressed}>
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
            <MaterialIcons name="arrow-back-ios-new" size={24} color="black" />
          </View>
        </TouchableOpacity>
      )}
      {open || (
        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      )}
      <View style={{ flex: 1 }}>
        {onSearch && (
          <SearchComponent onSateChange={setOpen} onSearch={onSearch} />
        )}
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  container: {
    width: SIZES.width,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    // borderBottomColor: "#FFFFFF",
    // borderBottomWidth: 1,
  },
});
