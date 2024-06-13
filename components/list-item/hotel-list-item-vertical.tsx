import { AppRoutePath } from "@/constants/app-route/app-route-path";
import { AppTypes } from "@/types";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HotelListItemVertical = ({ item }: { item: AppTypes.HotelType }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(AppRoutePath.hotels.initial(item.id));
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
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
            {item.name}
          </Text>
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

export default HotelListItemVertical;

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 4,
  },
  container: {
    paddingBottom: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 8,
  },
  descriptionWrapper: {
    alignItems: "flex-start",
    justifyContent: "space-between",
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
    height: 120,
    width: "90%",
    marginTop: 8,
    // flex: 1,
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
