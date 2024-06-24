import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProfileTile({
  title,
  icon,
  onPress,
}: {
  title: string;
  icon: any;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.row}>
        {icon}
        <Text style={{ flexGrow: 1 }}>{title}</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: 5,
    backgroundColor: "white",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 8,
    borderRadius: 8,
  },
});
