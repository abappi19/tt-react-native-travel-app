import { useServiceCountryPaginate } from "@/library/service/country.service";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { match } from "ts-pattern";
import { CountryListItem } from "../list-item/country-list-item";
// import countries from "@/assets/data/countries";

const Places = () => {
  const { countryList, isLoading, refetch, setFilterData } =
    useServiceCountryPaginate();

  return match(isLoading)
    .with(true, () => (
      <View>
        <ActivityIndicator size={22} />
      </View>
    ))
    .otherwise(() => (
      <View style={{ paddingTop: 22 }}>
        <Text style={styles.title}>Places</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={() => <View style={styles.separator} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          data={countryList}
          renderItem={({ item }) => <CountryListItem item={item} />}
        />
      </View>
    ));
};

export default Places;

const styles = StyleSheet.create({
  container: {
    // padding: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    paddingVertical: 4,
  },
  separator: {
    padding: 4,
  },
});
