import { Colors } from "@/constants/tokens/colors";
import SIZES from "@/constants/tokens/sizes";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { useThemeColor } from "@/hooks/useThemeColor";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function OnboardingItemView({
  item,
  isEnd = false,
  onButtonClick
}: {
  item: {
    image: any;
    key: string;
    title: string;
    description: string;
  };
  isEnd: boolean;
  onButtonClick:()=>void;
}) {
  const tintColor = useThemeColor({}, "tint");

  return (
    <ImageBackground
      source={item.image}
      style={{
        flex: 1,
        width: SIZES.width,
        height: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          justifyContent: "flex-end",
          backgroundColor: "#0000006B",
        }}
      >
        <View style={{ padding: 8, alignItems:'flex-start' }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: tintColor }]}
            onPress={onButtonClick}
          >
            <Text style={styles.buttonText}>{isEnd ? "Finish" : "Next"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  title: {
    color: "#FFFDE7",
    fontWeight: "bold",
    fontSize: 18,
    fontFamily: "SpaceMono",
  },
  description: {
    marginTop: 8,
    marginBottom: 12,
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    fontFamily: "SpaceMono",
  },
});
