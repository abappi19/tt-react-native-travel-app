import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "@/components/app-bar/app-bar";
import { router, useLocalSearchParams } from "expo-router";
import { AppRoutePath } from "@/constants/app-route/app-route-path";
import RecommendationListItem from "@/components/list-item/recommendation-list-item";
import rooms from "@/assets/data/rooms";
import RoomListItem from "@/components/list-item/room-list-item";
import hotels from "@/assets/data/hotels";
import { AppTypes } from "@/types";
import { Rating } from "react-native-ratings";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Button from "@/components/button/button";
import BookSuccess from "@/components/hotel/book-success";
import { useStoreUser, useStoreUserBookings } from "@/library/store/user";
import { useServiceBookingUpdate } from "@/library/service/booking.service";

const SelectedRoom = () => {
  const { id, roomId } = useLocalSearchParams();

  const [totalGuest, setTotalGuest] = useState(0);
  const [bookSuccess, setBookSuccess] = useState(false);

  const { user } = useStoreUser();
  const BookingUpdateService = useServiceBookingUpdate({
    onComplete(response) {
      if (response.message === "success") {
        setBookSuccess(true);
      }
    },
  });

  const hotel = useMemo(() => {
    return hotels.find((hotel) => hotel.id === Number(id));
  }, [id]) as any;

  const room = rooms.find(
    (room) => room.id === Number(roomId)
  ) as AppTypes.RoomType;

  if (room && hotel) {
    room.hotel = hotel;
  }

  const handleBackPressed = () => {
    router.back();
  };

  const handleBookNow = () => {
    if (!user) {
      router.push(AppRoutePath.authentication.signin);
      return;
    }

    BookingUpdateService.updateBooking({
      bookingDate: Date.now().toString(),
      expireDate: Date.now().toString(),
      hotel: hotel,
      room: room,
      totalGuest: totalGuest,
    });
  };

  const handleOnBookDone = () => {
    router.replace(AppRoutePath.initial);
  };

  if (bookSuccess) return <BookSuccess room={room} onDone={handleOnBookDone} />;

  return (
    <SafeAreaView>
      <AppBar
        onBackPressed={router.canGoBack() ? handleBackPressed : undefined}
        title={room?.name}
      />

      <ScrollView>
        <View style={styles.card}>
          <View>
            <Image style={styles.image} source={room?.image} />

            <View style={styles.descriptionWrapper}>
              <View>
                <Text style={styles.title}>{room?.name}</Text>
                <Text style={styles.subtitle}>{hotel?.name}</Text>
              </View>
              <View style={styles.rattingWrapper}>
                <Text style={styles.rating}> ★ {room?.rating} </Text>
                <Text style={styles.review}>{` (${room?.review}) `}</Text>
              </View>
            </View>
            <View style={styles.hr} />
            <View style={{ padding: 8 }}>
              <Text style={{ paddingBottom: 12 }}>Room Requirements</Text>
              <View style={styles.row}>
                <Text>Price per night</Text>
                <Text style={styles.pricePerNight}>
                  $ {room?.price_per_night}
                </Text>
              </View>
              <View style={styles.row}>
                <Text>Payment method</Text>
                <View style={{ ...styles.row }}>
                  <Image
                    source={require("@/assets/images/graphics/visa.jpeg")}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 16,
                    }}
                  />
                </View>
              </View>
              <View style={{ ...styles.row, paddingTop: 8 }}>
                <Text>4 Guest</Text>
                <View style={{ ...styles.row, justifyContent: "flex-end" }}>
                  <TouchableOpacity
                    onPress={() => {
                      setTotalGuest((o) => Math.max(--o, 0));
                    }}
                  >
                    <MaterialCommunityIcons
                      name="minus"
                      size={16}
                      style={{
                        ...styles.imageButton,
                        paddingStart: 2,
                        paddingTop: 2,
                      }}
                    />
                  </TouchableOpacity>

                  <Text style={{ padding: 8, fontWeight: "bold" }}>
                    {String(totalGuest)}
                  </Text>

                  <TouchableOpacity
                    onPress={() => {
                      setTotalGuest((o) => Math.min(4, ++o));
                    }}
                  >
                    <MaterialCommunityIcons
                      name="plus"
                      size={16}
                      style={{
                        ...styles.imageButton,
                        paddingStart: 2,
                        paddingTop: 2,
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <Button
                isLoading={BookingUpdateService.isLoading}
                onPress={handleBookNow}
                title="Book Now"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SelectedRoom;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageButton: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#8b8b8b",
    borderRadius: 4,
    borderWidth: 1,
  },
  pricePerNight: {
    fontWeight: "bold",
  },
  hr: {
    padding: 1,
    backgroundColor: "#dddddd7e",
    marginHorizontal: 8,
  },
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
    marginHorizontal: 8,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 16,
  },
  descriptionWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  rattingWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    color: "#e4af00",
    fontWeight: "bold",
  },
  review: {
    color: "#797979",
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
