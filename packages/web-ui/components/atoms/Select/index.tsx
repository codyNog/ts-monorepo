import * as S from "@radix-ui/react-select";
import { styled } from "@stitches/react";

const Root = styled(S.Root, { border: "1px solid black" });
const Trigger = styled(S.Trigger, {
  borderWidth: 1,
  borderColor: "Gray",
  padding: 4,
  borderRadius: 4,
  color: "Gray",
});
const Value = styled(S.Value, {});
const Icon = styled(S.Icon, { marginLeft: 8 });

type Option = {
  value: string;
  label: string;
};

type Props = Pick<S.SelectProps, "name" | "onValueChange" | "value"> & {
  options: Option[];
  placeholder?: string;
};

export const Select = ({
  name,
  value,
  options,
  onValueChange,
  placeholder,
}: Props) => (
  <Root name={name} value={value} onValueChange={onValueChange}>
    <Trigger>
      <Value placeholder={placeholder} />
      <Icon />
    </Trigger>
    <S.Portal>
      <S.Content>
        <S.ScrollUpButton />
        <S.Viewport>
          {options.map(({ value, label }) => (
            <S.Item key={label} value={String(value)}>
              <S.ItemText>{label}</S.ItemText>
              <S.ItemIndicator />
            </S.Item>
          ))}
        </S.Viewport>
        <S.ScrollDownButton />
      </S.Content>
    </S.Portal>
  </Root>
);
