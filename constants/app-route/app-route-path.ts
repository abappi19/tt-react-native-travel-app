export const AppRoutePath = {
  initial: "/",
  tabs: {
    home: "/(tabs)/home",
  },
  onboarding: "/onboarding",
  places(id: number) {
    return `/places/${id}`;
  },
};
