import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SettingTile({
  title,
  title2,
  onPress,
}: {
  title: string;
  title2: string;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.row}>
        <Text style={{ flexGrow: 1, ...styles.title }}>{title}</Text>
        <Text style={styles.title2}>{title2}</Text>
        <MaterialIcons name="arrow-forward-ios" size={16} color="#535353" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
  },
  title2: {
    fontSize: 16,
    color: "#888888",
  },
  row: {
    gap: 5,
    // backgroundColor: "white",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
});
