import AppBar from "@/components/app-bar/app-bar";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import hotels from "@/assets/data/hotels";
import RecommendationListItem from "@/components/recommendations/recommendation-list-item";
import HotelListItem from "@/components/nearby-hotels/hotel-list-item";

export default function OnboardingScreen() {
  const [search, setSearch] = useState("");

  const filteredHotels = useMemo(() => {
    if (!search) return hotels;

    const msearch = search.toLowerCase().trim();

    return hotels.filter((r) =>
      r.name.toLowerCase().trim().includes(msearch)
    );
  }, [search]);

  const handleBackPressed = () => {
    router.back();
  };
  return (
    <SafeAreaView>
      <AppBar
        onBackPressed={router.canGoBack() ? handleBackPressed : undefined}
        title="Nearby Hotels"
        onSearch={setSearch}
      />
      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={filteredHotels}
          ListFooterComponent={() => <View style={styles.separator} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => <HotelListItem item={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

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
