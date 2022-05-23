import { useToast } from "@chakra-ui/react";
import { useCallback } from "react";
import { Toast } from "../../../components/atoms/Toast";

export const usePromise = () => {
  const toast = useToast();

  const onSuccess = useCallback(
    (message: string) => {
      toast({
        position: "bottom-left",
        render: () => <Toast message={message} />,
      });
    },
    [toast]
  );

  const onError = useCallback(
    (message: string) => {
      toast({
        position: "bottom-left",
        render: () => <Toast bgColor={"red.500"} message={message} />,
      });
      throw message;
    },
    [toast]
  );

  return { onSuccess, onError };
};
