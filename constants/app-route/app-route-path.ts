export const AppRoutePath = {
  initial: "/",
  tabs: {
    home: "/(tabs)/home",
  },

  onboarding: "/onboarding",
  recommendations: "/recommendations",
  nearbyHotels: "/nearby-hotels",
  places(id: number) {
    return `/places/${id}`;
  },
  hotels(id: number) {
    return `/hotels/${id}`;
  },
};
