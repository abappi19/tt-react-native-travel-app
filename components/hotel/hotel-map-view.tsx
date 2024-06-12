import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, UrlTile } from "react-native-maps";

type HotelMapViewProps = {
  hotelId: number;
  location: {
    lat: number;
    long: number;
    name: string;
  };
};
const HotelMapView = ({ hotelId, location }: HotelMapViewProps) => {
  const coordinate = {
    latitude: location.lat,
    longitude: location.long,
    latitudeDelta: 0,
    longitudeDelta: 0,
  };
  return (
    <View>
      <Text>map view not implemented</Text>
    </View>
  );
};

export default HotelMapView;

const styles = StyleSheet.create({});
