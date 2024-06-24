import { AppRoutePath } from "@/constants/app-route/app-route-path";
import { useStoreUser } from "@/library/store/user";
import { AppTypes, ServerResponseTypes } from "@/types";
import { useRouter } from "expo-router";
import { useCallback } from "react";

export const useLoginOnComplete = () => {
  const router = useRouter();
  const { updateUser } = useStoreUser();

  const onComplete = useCallback(
    (data: ServerResponseTypes.TApiResponse<AppTypes.UserType>) => {
      if (data.message === "success") {
        updateUser(data.payload);

        router.replace(AppRoutePath.initial);
      }
    },
    []
  );

  return { onComplete };
};
