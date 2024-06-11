import { AntDesign } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

type SearchComponentProps = {
  onSearch: (text: string) => void;
};

export default function SearchComponent({ onSearch }: SearchComponentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const searchInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (!expanded) return;
    if (searchInputRef.current?.isFocused) return;

    searchInputRef.current?.focus();
  }, [expanded, searchInputRef]);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
        borderRadius: 22,
        flex: 1,
        paddingHorizontal: 4,
      }}
    >
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#30303046",
          borderRadius: 22,
          padding: 8,
          flex: expanded ? 1 : 0,
        }}
      >
        {expanded && (
          <TextInput
            ref={searchInputRef}
            placeholder="Search..."
            style={{ flex: 1, paddingHorizontal: 4 }}
            value={searchQuery}
            onChangeText={(text) => {
              setSearchQuery(text);
              onSearch(text);
            }}
          />
        )}
        <TouchableOpacity onPress={() => setExpanded((o) => !o)}>
          <AntDesign
            name={expanded ? "close" : "search1"}
            size={18}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
