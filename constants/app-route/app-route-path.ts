export const AppRoutePath = {
  initial: "/",
  search: {
    normalSearch: "/(search)/normal-search",
    hotelSearch: "/(search)/hotel-search",
  },
  onboarding: "/onboarding",
  recommendations: "/recommendations",
  nearbyHotels: "/nearby-hotels",
  tabs: {
    home: "/(tabs)/home",
    location: "/(tabs)/location",
    message: "/(tabs)/message",
    profile: "/(tabs)/profile",
  },
  authentication: {
    signin: "/(authentication)/signin",
    register: "/(authentication)/register",
  },
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
    reviews(id: number) {
      return `/hotels/${id}/reviews`;
    },
  },
};
