import { useCallback } from "react";
import { useAuth } from "~/store/global/Auth";
import { useToast } from "@my/shared/front/store/utils/Toast";

export const usePromise = () => {
  const { onError: onE } = useToast();
  const { onSessionExpired } = useAuth();

  const onError = useCallback(
    (error: any) => {
      if (error.status === "401") {
        onSessionExpired();
      }
      onE(error.message);
    },
    [onSessionExpired, onE]
  );

  return { onError };
};
