import { useState, useCallback } from "react";
import { User } from "@my/shared/entities/User";
import { initialState } from "~/constants/state";

export const useUserForm = (userProps?: User) => {
  const [user, setUser] = useState<User>(userProps || initialState.user);

  const onChangeName = useCallback(
    (name: string) => {
      setUser((prev) => ({ ...prev, name }));
    },
    [setUser]
  );

  const onChangeBiography = useCallback(
    (biography: string) => {
      setUser((prev) => {
        return {
          ...prev,
          profile: { uid: prev.profile?.uid || "", biography },
        };
      });
    },
    [setUser]
  );

  return { user, onChangeName, onChangeBiography };
};
