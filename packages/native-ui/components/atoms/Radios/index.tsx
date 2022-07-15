import { Radio as NRadio } from "native-base";

export type RadioOption<T> = { value: T; label: string };

type Props<T> = {
	name: string;
	value: T;
	options: RadioOption<T>[];
	onChange: (value: T) => void;
};

export const Radios = <T extends string>(
	{ name, value, options, onChange }: Props<T>,
) => {
	return (
		<NRadio.Group name={name} value={value} onChange={(e) => onChange(e as T)}>
      {options.map((elem) => (
        <NRadio key={elem.label} value={elem.value}>
          {elem.label}
        </NRadio>
      ))}
    </NRadio.Group>
	);
};
