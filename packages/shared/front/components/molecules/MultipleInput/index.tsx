import { Box } from "@chakra-ui/react";
import { onPreseEnter } from "../../../libs/components";
import { useCallback, useState } from "react";
import { Input } from "../../atoms/Input";
import { Tag } from "../../atoms/Tag";
import { MarginProps } from "../../style";

const INITIAL_VALUE = "";

type Props = MarginProps & {
  value: string[];
  submit: (value: string[]) => void;
  onDelete: (value: string[]) => void;
};

export const MultipleInput = ({
  value,
  submit,
  onDelete,
  ...marginProps
}: Props): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>(INITIAL_VALUE);

  const onSubmit = useCallback(() => {
    if (value.includes(inputValue)) return;
    submit(value.concat(inputValue));
    setInputValue(INITIAL_VALUE);
  }, [inputValue, submit, setInputValue]);

  const onDeleteTag = useCallback(
    (tag: string) => {
      const newValue = value.filter((elem) => elem !== tag);
      onDelete(newValue);
    },
    [value, onDelete]
  );

  return (
    <Box {...marginProps}>
      <Input
        value={inputValue}
        onChange={setInputValue}
        onKeyDown={(e) => onPreseEnter(e, onSubmit)}
      />
      <Box mt={2}>
        {value.map((elem) => (
          <Tag key={elem} onClose={() => onDeleteTag(elem)} mr={2}>
            {elem}
          </Tag>
        ))}
      </Box>
    </Box>
  );
};
