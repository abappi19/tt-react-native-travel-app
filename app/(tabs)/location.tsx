import OnboardingItemView from "@/components/onboarding/onboarding-item-view";
import SIZES from "@/constants/tokens/sizes";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from "react-native";

export default function Index() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatListRef = useRef<FlatList<any>>(null);

  const slides = [
    {
      key: "1",
      title: "Welcome to Our App",
      description: "Discover new experiences and places with our app.",
      image: require("@/assets/images/travel/travel1.jpg"),
    },
    {
      key: "2",
      title: "Plan Your Trips",
      description: "Easily plan and organize your trips.",
      image: require("@/assets/images/travel/travel2.jpg"),
    },
    {
      key: "3",
      title: "Stay Connected",
      description: "Stay connected with your travel companions.",
      image: require("@/assets/images/travel/travel3.jpg"),
    },
  ];

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / SIZES.width);
    setCurrentIndex(index);
  };

  const isLastSlide = currentIndex === slides.length - 1;

  const handleNext = () => {
    if (!isLastSlide) {
      (flatListRef.current as any).scrollToIndex({ index: currentIndex + 1 });
    } else {
      router.replace("(tabs)");
    }
  };

  return (
    <FlatList
      style={{
        height: "100%",
      }}
      ref={flatListRef}
      data={slides}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => (
        <OnboardingItemView
          item={item}
          isEnd={isLastSlide}
          onButtonClick={handleNext}
        />
      )}
    />
  );
}
