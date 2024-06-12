import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import hotels from "@/assets/data/hotels";
import AppBar from "@/components/app-bar/app-bar";
import { AppRoutePath } from "@/constants/app-route/app-route-path";
import { Rating } from "react-native-ratings";
import HotelMapView from "@/components/hotel/hotel-map-view";

const PlaceDetails = () => {
  const { id } = useLocalSearchParams();
  const hotel = useMemo(() => {
    return hotels.find((hotel) => hotel.id === Number(id));
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

  if (!hotel) return null;

  return (
    <>
      <AppBar
        style={
          {
            // backgroundColor: "white",
          }
        }
        title={hotel?.name}
        // titleColor="white"
        onBackPressed={router.canGoBack() ? handleBackPressed : undefined}
        onSearch={() => {}}
      />

      <ScrollView>
        <View style={{ padding: 8 }}>
          <Image style={styles.image} source={hotel?.image} />
          <View style={styles.card}>
            <Text style={styles.title} numberOfLines={1}>
              {hotel?.name}
            </Text>
            <Text style={styles.subtitle}>{hotel?.location.name}</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: 16,
              }}
            >
              <Rating
                ratingBackgroundColor="#00000000"
                style={{}}
                type="star"
                ratingCount={5}
                startingValue={hotel?.rating}
                imageSize={18}
                // tintColor="#fff"
                // ratingColor="#FF7D13"
                readonly
                // showRating
                // onFinishRating={this.ratingCompleted}
              />
              <Text>{`(${hotel?.reviews})`}</Text>
            </View>
          </View>
          <View>
            <Text style={[styles.title, { paddingVertical: 8 }]}>
              Description
            </Text>
            <Text>{hotel?.description}</Text>

            <Text style={[styles.title, { paddingVertical: 8 }]}>Location</Text>

            <HotelMapView hotelId={hotel?.id} location={hotel?.location} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  image: {
    height: "auto",
    aspectRatio: 2,
    width: "100%",
    borderRadius: 16,
  },
  card: {
    backgroundColor: "white",
    alignSelf: "center",
    width: "95%",
    borderRadius: 16,
    padding: 12,
    transform: [
      {
        translateY: -50,
      },
    ],
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    // paddingVertical: 8,
    // padding: 4,
  },
  subtitle: {
    // fontWeight: "bold",
    color: "#333333",
    fontSize: 16,
    // paddingVertical: 8,
    // padding: 4,
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
