export const AppRoutePath = {
  initial: "/",
  tabs: {
    home: "/(tabs)/home",
  },

  onboarding: "/onboarding",
  recommendations: "/recommendations",
  places(id: number) {
    return `/places/${id}`;
  },
};
