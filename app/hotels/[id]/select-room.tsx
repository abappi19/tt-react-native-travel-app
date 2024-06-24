import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useCallback, useMemo } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "@/components/app-bar/app-bar";
import { router, useLocalSearchParams } from "expo-router";
import { AppRoutePath } from "@/constants/app-route/app-route-path";
import RecommendationListItem from "@/components/list-item/recommendation-list-item";
import rooms from "@/assets/data/rooms";
import RoomListItem from "@/components/list-item/room-list-item";
import hotels from "@/assets/data/hotels";
import { AppTypes } from "@/types";

const SelectRoom = () => {
  const { id } = useLocalSearchParams();

  const hotel = useMemo(() => {
    return hotels.find((hotel) => hotel.id === Number(id));
  }, [id]);

  const myRooms = rooms.map((room) => ({
    ...room,
    hotel: hotel as AppTypes.HotelType,
  }));

  const handleBackPressed = () => {
    // if (router.canGoBack())
    router.back();
    // router.push(AppRoutePath.hotels.initial(Number(id)));
  };
  return (
    <SafeAreaView>
      <AppBar
        onBackPressed={router.canGoBack() ? handleBackPressed : undefined}
        title="Select Room"
      />

      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={myRooms}
          ListFooterComponent={() => <View style={styles.separator} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => <RoomListItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectRoom;

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 4,
  },
  container: {
    padding: 8,
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
