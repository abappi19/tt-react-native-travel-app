export const AppRoutePath = {
  initial: "/",
  search: {
    normalSearch: "/(search)/normal-search",
    hotelSearch: "/(search)/hotel-search",
  },
  onboarding: "/onboarding",
  recommendations: {
    initial: "/recommendations",
    byId(id: string | number) {
      return `/recommendations/${id}`;
    },
  },
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
  places(id: string | number) {
    return `/places/${id}`;
  },
  hotels: {
    initial(id: string | number) {
      return `/hotels/${id}`;
    },
    selectRoom(id: string | number) {
      return `/hotels/${id}/select-room`;
    },
    selectedRoom(hotelId: string | number, roomId: string | number) {
      return `/hotels/${hotelId}/selected-room/${roomId}`;
    },
    reviews(id: string | number) {
      return `/hotels/${id}/reviews`;
    },
  },
};
