import places from "@/assets/data/places";
import AppBar from "@/components/app-bar/app-bar";
import RecommendationListItem from "@/components/list-item/recommendation-list-item";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Recommendations() {
  const [search, setSearch] = useState("");

  const filteredPlaces = useMemo(() => {
    if (!search) return places;

    const msearch = search.toLowerCase().trim();

    return places.filter((r) =>
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
        title="Recommendations"
        onSearch={setSearch}
      />
      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={filteredPlaces}
          ListFooterComponent={() => <View style={styles.separator} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={({ item }) => <RecommendationListItem item={item} />}
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
