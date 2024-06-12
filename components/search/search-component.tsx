import { AntDesign } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

type SearchComponentProps = {
  onSearch: (text: string) => void;
  onSateChange: (open: boolean) => void;
};

export default function SearchComponent({
  onSearch,
  onSateChange,
}: SearchComponentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const searchInputRef = useRef<TextInput>(null);

  useEffect(() => {
    onSateChange(expanded);

    if (!expanded) {
      setSearchQuery("");
      onSearch("");
      return;
    }
    if (searchInputRef.current?.isFocused) return;

    searchInputRef.current?.focus();
  }, [expanded, searchInputRef]);

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
        borderRadius: expanded ? 22 : 8,
        flex: 1,
        padding: 4,
      }}
    >
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          backgroundColor: "#FFFFFF",
          borderRadius: expanded ? 22 : 8,
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
