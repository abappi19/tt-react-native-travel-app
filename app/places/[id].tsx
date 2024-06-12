import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import {
  router,
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";

import countries from "@/assets/data/countries";
import SIZES from "@/constants/tokens/sizes";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Recommendations from "@/components/home/recommendations";
import AppBar from "@/components/app-bar/app-bar";

const PlaceDetails = () => {
  const { id } = useLocalSearchParams();
  const [scrolled, setScrolled] = useState(false);
  const { top } = useSafeAreaInsets();

  const country = useMemo(() => {
    return countries.find((country) => country.id === Number(id));
  }, [id]);

  // useEffect(() => {
  //   navigation.setOptions({ title: country?.name });
  // }, [navigation, country]);

  const handleBackPressed = () => {
    router.back();
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
          <Image style={styles.image} source={country?.image} />
          <View style={{ padding: 8 }}>
            <Text style={styles.title}>{country?.name}</Text>
            <Text style={styles.description}>{country?.description}</Text>
            <Recommendations />
            <Recommendations />
            <Recommendations />
            <Recommendations />
            <Recommendations />
            <Recommendations />
            <Recommendations />
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
        title={country?.name}
        titleColor="white"
        onBackPressed={router.canGoBack() ? handleBackPressed : undefined}
        onSearch={() => {}}
      />
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
});
