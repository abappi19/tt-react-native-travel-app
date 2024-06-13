export const AppRoutePath = {
  initial: "/",
  search: {
    normalSearch: "/(search)/normal-search",
    hotelSearch: "/(search)/hotel-search",
  },
  tabs: {
    home: "/(tabs)/home",
    location: "/(tabs)/location",
    message: "/(tabs)/message",
    profile: "/(tabs)/profile",
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
