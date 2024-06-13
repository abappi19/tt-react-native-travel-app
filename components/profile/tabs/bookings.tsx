import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import hotels from "@/assets/data/hotels";
import HotelListItem from "@/components/list-item/hotel-list-item";

const Bookings = () => {
  return (
    <View style={{ flex: 1, padding: 8 }}>
      <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={hotels}
        ListFooterComponent={() => <View style={styles.separator} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => <HotelListItem item={item} />}
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
