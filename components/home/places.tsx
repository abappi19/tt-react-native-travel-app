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
      <View
        style={{
          padding: 4,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Image
          style={{
            height: 80,
            width: 80,
            borderRadius: 8,
          }}
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
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={countries}
      renderItem={({ item }) => <CountryListItem item={item} />}
    />
  );
};

export default Places;

const styles = StyleSheet.create({});
