import { router, useLocalSearchParams } from "expo-router";
import React, { useMemo } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import hotels from "@/assets/data/hotels";
import AppBar from "@/components/app-bar/app-bar";
import Button from "@/components/button/button";
import HotelMapView from "@/components/hotel/hotel-map-view";
import ReviewListItem from "@/components/list-item/review-list-item";
import { AppRoutePath } from "@/constants/app-route/app-route-path";
import { Feather } from "@expo/vector-icons";
import { Rating } from "react-native-ratings";

const HotelDetails = () => {
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

  const handleSelectRoom = () => {
    // router.back();
    router.push(AppRoutePath.hotels.selectRoom(Number(id)));
  };

  const handleOnReviewsButtonClick = () => {
    router.push(AppRoutePath.hotels.reviews(Number(id)));
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
          <View>
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

            <View style={{}}>
              <Text style={[styles.title, { paddingVertical: 8 }]}>
                Description
              </Text>
              <Text>{hotel?.description}</Text>

              <Text style={[styles.title, { paddingVertical: 8 }]}>
                Location
              </Text>

              <HotelMapView hotelId={hotel?.id} location={hotel?.location} />

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={[styles.header, { paddingVertical: 8 }]}>
                  Reviews
                </Text>
                <TouchableOpacity onPress={handleOnReviewsButtonClick}>
                  <Feather name="list" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <FlatList
                nestedScrollEnabled
                data={hotel.reviewList}
                ListFooterComponent={() => <View style={styles.footer} />}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                ListHeaderComponent={() => <View style={styles.separator} />}
                renderItem={ReviewListItem}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.title}>$200</Text>
          <Text style={styles.subtitle}>Jan 01 - Dec 25</Text>
        </View>
        <Button title="Select Room" onPress={handleSelectRoom} />
      </View>
    </>
  );
};

export default HotelDetails;

const styles = StyleSheet.create({
  bottomBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
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
    padding: 1,
    backgroundColor: "#ddd",
  },
  header: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 18,
  },
  footer: {
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    padding: 56,
  },
});
