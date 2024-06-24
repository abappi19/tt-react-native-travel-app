import { defaultStyles } from "@/styles";
import { AppTypes } from "@/types";
import React from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import Button from "../button/button";
import { router } from "expo-router";
import { AppRoutePath } from "@/constants/app-route/app-route-path";

const RoomListItem = ({ item }: { item: AppTypes.RoomType }) => {
  return (
    // <TouchableOpacity
    //   onPress={() => {
    //     router.push(AppRoutePath.countries(item.id));
    //   }}
    // >
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={styles.image}
          resizeMethod="resize"
          resizeMode="cover"
          source={item.image}
        />
        <View style={styles.descriptionWrapper}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>{item.hotel?.name}</Text>
          <View style={styles.rattingWrapper}>
            <Text style={styles.rating}> ★ {item.rating} </Text>
            <Text style={styles.review}>{` (${item.review}) `}</Text>
          </View>
        </View>
      </View>
      <Button
        onPress={() => {
          if (!item.hotel?.id) {
            Alert.alert("Oops!", "Invalid hotel data. Couldn't select room.");
            return;
          }

          router.push(
            AppRoutePath.hotels.selectedRoom(item.hotel.id, item.id)
          );
        }}
        title="Select Room"
      />
    </View>
    // </TouchableOpacity>
  );
};

export default RoomListItem;

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 4,
  },
  container: {
    padding: 4,
    backgroundColor: "white",
    borderRadius: 8,
  },
  innerContainer: {
    padding: 4,
    alignItems: "stretch",
    justifyContent: "center",
    flexDirection: "row",
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
