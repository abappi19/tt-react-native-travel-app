export const AppRoutePath = {
  initial: "/",
  search: {
    normalSearch: "/(search)/normal-search",
    hotelSearch: "/(search)/hotel-search",
  },
  profile: {
    settings: "/(profile)/settings",
    personalInfo: "/(profile)/personal-info",
    payments: "/(profile)/payments",
  },
  onboarding: "/onboarding",
  places: {
    initial: "/places",
    byId(id: string | number) {
      return `/places/${id}`;
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
  countries(id: string | number) {
    return `/countries/${id}`;
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
