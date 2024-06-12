import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

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
  const url = `https://www.google.com/maps/place//@${location.lat},${location.long},15.3z`;

  //https://www.google.com/maps/place//@23.7826914,90.4247793,15.3z
  return <webview 
  
  />;
};

export default HotelMapView;

const styles = StyleSheet.create({});
