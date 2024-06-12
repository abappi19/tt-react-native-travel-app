export const AppRoutePath = {
  initial: "/",
  tabs: {
    initial: "/(tabs)",
    home: "/(tabs)/home",
  },

  onboarding: "/onboarding",
  recommendations: "/recommendations",
  nearbyHotels: "/nearby-hotels",
  places(id: number) {
    return `/places/${id}`;
  },
  hotels: {
    initial(id: number) {
      return `/hotels/${id}`;
    },
    selectRoom(id: number) {
      return `/hotels/${id}/select-room`;
    },
  },
};
