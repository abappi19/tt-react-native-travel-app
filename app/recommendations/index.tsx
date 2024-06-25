import places from "@/assets/data/places";
import AppBar from "@/components/app-bar/app-bar";
import RecommendationListItem from "@/components/list-item/recommendation-list-item";
import { useServicePlacePaginate } from "@/library/service/place.service";
import { router } from "expo-router";
import React, { useEffect, useMemo, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { match } from "ts-pattern";

export default function Recommendations() {
  const [search, setSearch] = useState("");

  // const filteredPlaces = useMemo(() => {
  //   if (!search) return places;

  //   const msearch = search.toLowerCase().trim();

  //   return places.filter((r) =>
  //     r.name.toLowerCase().trim().includes(msearch)
  //   );
  // }, [search]);

  const { isLoading, placeList, refetch, setFilterData } =
    useServicePlacePaginate();

  useEffect(() => {
    setFilterData({
      search_query: search,
    });
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
        {match(isLoading)
          .with(true, () => (
            <View>
              <ActivityIndicator size={22} />
            </View>
          ))
          .otherwise(() => (
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={placeList}
              ListFooterComponent={() => <View style={styles.separator} />}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={({ item }) => <RecommendationListItem item={item} />}
            />
          ))}
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
