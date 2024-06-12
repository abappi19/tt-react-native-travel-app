import hotels from "@/assets/data/hotels";
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
          <Text style={[styles.title]} numberOfLines={1} ellipsizeMode="tail">
            {item.name}
          </Text>
          <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="tail">
            {item.location.name}
          </Text>
          <View style={styles.rattingWrapper}>
            <Text style={styles.rating}> ★ {item.rating} </Text>
            {/* <Text style={styles.review}>{` (${item.reviews}) `}</Text> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const NearbyHotels = () => {
  const handleOnRecommendedIconPressed = () => {
    router.push(AppRoutePath.nearbyHotels);
  };

  return (
    <View style={{ paddingTop: 22 }}>
      <View
        style={{
          paddingHorizontal: 4,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.header}>Nearby Hotels</Text>
        <TouchableOpacity onPress={handleOnRecommendedIconPressed}>
          <Feather name="list" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={hotels}
        ListFooterComponent={() => <View style={styles.separator} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => <HotelListItem item={item} />}
      />
    </View>
  );
};

export default NearbyHotels;

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
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: 8,
  },
  descriptionWrapper: {
    // flex: 1,
    maxWidth: 140,
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
    // flex:1,
    height: 120,
    width: 140,
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
