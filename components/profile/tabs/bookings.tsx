import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import hotels from "@/assets/data/hotels";
import HotelListItem from "@/components/list-item/hotel-list-item";
import { useStoreUserBookings } from "@/library/store/user";
import BookingListItem from "@/components/list-item/booking-list-item";

const Bookings = () => {
  const { bookings } = useStoreUserBookings();
  return (
    <View style={{ flex: 1, padding: 8 }}>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={bookings}
        ListFooterComponent={() => <View style={styles.separator} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => <BookingListItem item={item} />}
      />
    </View>
  );
};

export default Bookings;

const styles = StyleSheet.create({
  separator: {
    padding: 8,
  },
});
