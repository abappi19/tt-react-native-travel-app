import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ReviewListItem = ({
  item,
}: {
  item: {
    userId: number;
    name: string;
    rating: number;
    reviewDate: string;
    review: string;
  };
}) => {
  return (
    <View
      style={{
        // flex: 1,
        // width: 100,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={{ backgroundColor: "white", borderRadius: 20, padding: 8 }}>
        <Ionicons name="person" size={26} color="" />
      </View>
      <View style={{ flex: 1, padding: 8, justifyContent: "space-between" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: 5,
            }}
          >
            <Text
              style={{ color: "#ffad14", fontWeight: "bold", fontSize: 12 }}
            >
              ★{item.rating}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 12 }}>
              {item.reviewDate}
            </Text>
          </View>
        </View>
        <Text style={{ paddingTop: 8 }}>{item.review}</Text>
      </View>
    </View>
  );
};

export default ReviewListItem;

const styles = StyleSheet.create({});
