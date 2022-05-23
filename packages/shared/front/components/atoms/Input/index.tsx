import { Input as CInput, InputProps as CInputProps } from "@chakra-ui/react";

type arg = string | number;

type InputProps<T> = Omit<CInputProps, "onChange"> & {
  value: T;
  onChange: (value: T) => void;
};

export const Input = <T extends arg>(props: InputProps<T>) => (
  <CInput
    {...props}
    onChange={(e) => props.onChange(e.currentTarget.value as T)}
  />
);
