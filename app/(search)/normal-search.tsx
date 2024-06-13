import hotels from "@/assets/data/hotels";
import AppBar from "@/components/app-bar/app-bar";
import HotelListItemVertical from "@/components/list-item/hotel-list-item-vertical";
import SearchComponent2 from "@/components/search/search-component-2";
import SIZES from "@/constants/tokens/sizes";
import { AppTypes } from "@/types";
import { router } from "expo-router";
import React, { useMemo, useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";

const NormalSearchScreen = () => {
  const [search, setSearch] = useState("");

  const filteredHotels = useMemo(() => {
    if (!search) return [];
    const msearch = search.toLowerCase().trim();
    return hotels.filter((h) => h.name.toLowerCase().trim().includes(msearch));
  }, [search]);

  const EmptyComponent = () => (
    <View style={styles.emptyComponentContainer}>
      <Image
        resizeMode="contain"
        style={{
          width: "80%",
          height: 300,
        }}
        source={require("@/assets/images/graphics/hotel-not-found.png")}
      ></Image>
    </View>
  );
  //   const ItemSeparator = () => <View style={{ padding: 4 }}></View>;
  const RenderComponent = ({ item }: { item: AppTypes.HotelType }) => (
    <View style={{ padding: 4, width: "50%" }}>
      <HotelListItemVertical item={item} />
    </View>
  );
  return (
    <>
      <AppBar
        onBackPressed={
          router.canGoBack()
            ? () => {
                router.back();
              }
            : () => {}
        }
        title="Search"
      />
      <View style={{ flex: 1, padding: 8 }}>
        <SearchComponent2 onSearch={setSearch} />

        <FlatList
          ListEmptyComponent={EmptyComponent}
          // ItemSeparatorComponent={ItemSeparator}
          numColumns={2}
          data={filteredHotels}
          keyExtractor={(item, index) => String(item.id)}
          renderItem={RenderComponent}
        />
      </View>
    </>
  );
};

export default NormalSearchScreen;

const styles = StyleSheet.create({
  emptyComponentContainer: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    marginTop: SIZES.height * 0.08,
  },
});
