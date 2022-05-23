import { useState } from "react";
import { MultipleInput as Component } from ".";

export default { title: "molecules/MultipleInput" };

export const MultipleInput = () => {
  const [value, setValue] = useState<string[]>(["aaa", "bbb"]);

  return (
    <Component
      value={value}
      submit={(value) => setValue(value)}
      onDelete={setValue}
    />
  );
};
