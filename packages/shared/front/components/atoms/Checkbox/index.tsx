import { Checkbox as CCheckBox } from "@chakra-ui/react";
import { MarginProps } from "../../style";

type Props = MarginProps & {
  checked: boolean;
  onChange: (value: boolean) => void;
  children: React.ReactNode;
};

export const Checkbox = ({
  checked,
  onChange,
  children,
  ...marginProps
}: Props) => (
  <CCheckBox
    checked={checked}
    onChange={(e) => onChange(e.currentTarget.checked)}
    {...marginProps}
  >
    {children}
  </CCheckBox>
);
