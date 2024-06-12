export const AppRoutePath = {
  initial: "/",
  tabs: {
    home: "/(tabs)/home",
  },

  onboarding: "/onboarding",
  recommended: "/recommended",
  places(id: number) {
    return `/places/${id}`;
  },
};
