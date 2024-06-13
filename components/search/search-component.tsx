import { AntDesign } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { match } from "ts-pattern";

type SearchComponentProps = {
  visible?: boolean;
  onSearch?: (text: string) => void;
  onSateChange: (open: boolean) => void;
  onSearchClick?: () => void;
};

export default function SearchComponent({
  onSearch,
  onSateChange,
  onSearchClick,
  visible = true,
}: SearchComponentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const searchInputRef = useRef<TextInput>(null);

  useEffect(() => {
    onSateChange(expanded);

    if (!expanded) {
      setSearchQuery("");
      if (!onSearch) return;
      onSearch("");
      return;
    }
    if (searchInputRef.current?.isFocused) return;

    searchInputRef.current?.focus();
  }, [expanded, searchInputRef]);

  return (
    <View
      style={{
        opacity: visible ? 1 : 0,
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
              if (!onSearch) return;
              onSearch(text);
            }}
          />
        )}
        <TouchableOpacity
          onPress={match(visible)
            .with(true, () =>
              match(!!onSearchClick)
                .with(false, () => () => setExpanded((o) => !o))
                .otherwise(() => onSearchClick)
            )
            .otherwise(() => () => {})}
        >
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
