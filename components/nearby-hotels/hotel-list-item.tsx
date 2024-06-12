import recommendatoins from "@/assets/data/recommendations";
import { AppRoutePath } from "@/constants/app-route/app-route-path";
import { AppTypes } from "@/types";
import { Feather } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const HotelListItem = ({ item }: { item: AppTypes.HotelType }) => {
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
        <View style={styles.descriptionWrapper}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>{item.location.name}</Text>
          <View style={styles.rattingWrapper}>
            <Text style={styles.rating}> ★ {item.rating} </Text>
            <Text style={styles.review}>{` (${item.reviews}) `}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HotelListItem;

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 4,
  },
  container: {
    padding: 8,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 8,
  },
  descriptionWrapper: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  rattingWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    color: "#e4af00",
    fontWeight: "bold",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
  },
  review: {
    color: "#797979",
  },
  separator: {
    padding: 4,
  },
});
