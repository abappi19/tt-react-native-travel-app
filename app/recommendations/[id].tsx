import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import places from "@/assets/data/places";
import AppBar from "@/components/app-bar/app-bar";
import Button from "@/components/button/button";
import RecommendationListItem from "@/components/list-item/recommendation-list-item";
import { AppRoutePath } from "@/constants/app-route/app-route-path";
import SIZES from "@/constants/tokens/sizes";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const PlaceDetails = () => {
  const { id } = useLocalSearchParams();
  const [scrolled, setScrolled] = useState(false);
  const { top } = useSafeAreaInsets();

  const place = useMemo(() => {
    return places.find((place) => place.id === Number(id));
  }, [id]);

  // useEffect(() => {
  //   navigation.setOptions({ title: country?.name });
  // }, [navigation, country]);

  const handleBackPressed = () => {
    router.back();
  };

  const handleBestHotelsClick = () => {
    router.push(AppRoutePath.nearbyHotels);
  };

  return (
    <>
      <ScrollView
        onScroll={(e) => {
          // console.log(e.nativeEvent.contentOffset.y);
          setScrolled(e.nativeEvent.contentOffset.y > 200);
        }}
      >
        <View>
          <Image style={styles.image} source={place?.image} />
          <View style={{ padding: 8 }}>
            <Text style={styles.title}>{place?.name}</Text>
            <Text style={styles.description}>{place?.countryId}</Text>

            <View
              style={{
                paddingHorizontal: 4,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.header}>Popular Destinations</Text>
              <TouchableOpacity onPress={() => {}}>
                <Feather name="list" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <FlatList
              nestedScrollEnabled
              showsHorizontalScrollIndicator={false}
              data={places}
              ListFooterComponent={() => <View style={styles.footer} />}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              renderItem={({ item }) => <RecommendationListItem item={item} />}
            />
          </View>
        </View>
      </ScrollView>

      <AppBar
        style={{
          position: "absolute",
          zIndex: 999,
          top: 0,
          left: 0,
          right: 0,
          paddingTop: top,
          height: top + 48,
          backgroundColor: scrolled ? "#00000083" : "transparent",
        }}
        title={place?.name}
        titleColor="white"
        onBackPressed={router.canGoBack() ? handleBackPressed : undefined}
        onSearch={() => {}}
      />

      <View
        style={{
          position: "absolute",
          zIndex: 999,
          bottom: 0,
          left: 0,
          right: 0,
          // height: 48,
          // backgroundColor: "white",
        }}
      >
        <Button
          style={{ margin: 8 }}
          title="Find Best Hotels"
          onPress={handleBestHotelsClick}
        />
      </View>
    </>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  image: {
    height: SIZES.width,
    width: SIZES.width,
    borderRadius: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    paddingVertical: 16,
  },
  description: {
    // fontWeight: "bold",
    // fontSize: 24,
    paddingVertical: 16,
  },
  separator: {
    padding: 4,
  },
  header: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 8,
  },
  footer: {
    padding: 56,
  },
});
