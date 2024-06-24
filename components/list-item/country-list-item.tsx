import { AppRoutePath } from "@/constants/app-route/app-route-path";
import { AppTypes } from "@/types";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const CountryListItem = ({ item }: { item: AppTypes.CountryType }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(AppRoutePath.countries(item.id));
      }}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          resizeMethod="resize"
          resizeMode="cover"
          source={item.image}
        />
        <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 8,
  },
});
