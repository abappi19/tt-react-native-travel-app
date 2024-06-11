import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useMemo } from "react";
import {
  useFocusEffect,
  useLocalSearchParams,
  useNavigation,
} from "expo-router";

import countries from "@/assets/data/countries";

const PlaceDetails = () => {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();

  const country = useMemo(() => {
    return countries.find((country) => country.id === Number(id));
  }, [id]);

  useEffect(() => {
    navigation.setOptions({ title: country?.name });
  }, [navigation, country]);

  return (
    <View>
      <Text>PlaceDetails</Text>
    </View>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({});
