import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../button/button";
import { AppTypes } from "@/types";

export default function BookSuccess({
  room,
  onDone,
}: {
  onDone: () => void;
  room: AppTypes.RoomType;
}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
      }}
    >
      <Image
        source={require("@/assets/images/graphics/checked.png")}
        resizeMode="contain"
        style={{ height: 100, width: 100 }}
      />

      <Text style={styles.title}>Booking Successful</Text>
      <Text>You can find booking details below</Text>

      <View
        style={{
          width: "100%",
          padding: 8,
        }}
      >
        <Text style={{ padding: 8, fontWeight: "bold" }}>Room details</Text>
        <View style={styles.card}>
          <Image source={room.image} resizeMode="cover" style={styles.image} />
          <View style={styles.descriptionWrapper}>
            <Text style={styles.title}>{room.name}</Text>
            <Text style={styles.subtitle}>{room.hotel?.name}</Text>
            <View style={styles.rattingWrapper}>
              <Text style={styles.rating}> ★ {room.rating} </Text>
              <Text style={styles.review}>{` (${room.review}) `}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ padding: 8 }} />
      <View style={{ width: "100%", padding: 8 }}>
        <Button title="Done" onPress={onDone} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
  },
  descriptionWrapper: {
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
});
