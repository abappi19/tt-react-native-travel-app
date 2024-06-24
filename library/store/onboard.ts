import { create } from "zustand";

type OnboardStore = {
  isOnboarded: boolean;
  updateIsOnboarded: (value: boolean) => void;
};

const useOnboardStore = create<OnboardStore>((set) => {
  return {
    isOnboarded: false,
    updateIsOnboarded(value) {
      set((state) => ({
        ...state,
        isOnboarded: value,
      }));
    },
  };
});

export const useStoreOnboarded = () => {
  const isOnboarded = useOnboardStore((state) => state.isOnboarded);
  const updateIsOnboarded = useOnboardStore((state) => state.updateIsOnboarded);

  return {
    isOnboarded,
    updateIsOnboarded,
  };
};
