import SIZES from "@/constants/tokens/sizes";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import SearchComponent from "../search/search-component";

type AppBarType = {
  onSearch: (text: string) => void;
  title: string;
  onBackPressed?: () => void;
};

const AppBar = ({ onSearch, title, onBackPressed }: AppBarType) => {
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.container}>
      {onBackPressed && (
        <TouchableOpacity style={{ marginEnd: 8 }} onPress={onBackPressed}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      )}
      {open || <Text style={styles.title}>{title}</Text>}
      {onSearch && (
        <SearchComponent onSateChange={setOpen} onSearch={onSearch} />
      )}
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
    borderBottomColor: "#dddddd96",
    borderBottomWidth: 1,
  },
});
