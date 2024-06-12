import countries from "@/assets/data/countries";
import { AppRoutePath } from "@/constants/app-route/app-route-path";
import { AppTypes } from "@/types";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const CountryListItem = ({ item }: { item: AppTypes.CountryType }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(AppRoutePath.places(item.id));
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
const Places = () => {
  return (
    <View style={{ paddingTop: 22 }}>
      <Text style={styles.title}>Places</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={() => <View style={styles.separator} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={countries}
        renderItem={({ item }) => <CountryListItem item={item} />}
      />
    </View>
  );
};

export default Places;

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
  title: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 4,
  },
  separator: {
    padding: 4,
  },
});
