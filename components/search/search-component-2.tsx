import { Colors } from "@/constants/tokens/colors";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
  StyleProp,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

type SearchComponentProps = {
  onSearch?: (text: string) => void;
  onSearchClick?: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function SearchComponent2({
  onSearch,
  style,
  onSearchClick,
}: SearchComponentProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const searchInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (searchInputRef.current?.isFocused) return;

    searchInputRef.current?.focus();
  }, [searchInputRef]);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
        ...((style || {}) as any),
      }}
    >
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#FFFFFF",
          borderColor: Colors.light.tint,
          borderWidth: 1,
          padding: 0,
          margin: "auto",
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <TextInput
          ref={searchInputRef}
          placeholder="Search..."
          style={{ flex: 1, padding: 4 }}
          value={searchQuery}
          onChangeText={(text) => {
            setSearchQuery(text);
            if (!onSearch) return;
            if (text) return;// only call onSearch when no text
            onSearch(text);
          }}
        />

        <TouchableOpacity
          style={{
            borderColor: "#ddd",
            borderWidth: 1,
            height: "100%",
            backgroundColor: Colors.light.tint,
            // width: 48,
            // borderRadius: 4,
            padding: 8,
          }}
          onPress={() => {
            if (!onSearch) return;
            onSearch(searchQuery);
          }}
        >
          <AntDesign name={"search1"} size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
