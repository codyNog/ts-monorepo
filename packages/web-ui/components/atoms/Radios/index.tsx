import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { MarginProps } from "../../style";

export type RadioOption<T> = { value: T; label: string };

type Props<T> = MarginProps & {
	value: T;
	options: RadioOption<T>[];
	onChange: (value: T) => void;
};

export const Radios = <T extends string | number>({
	value,
	options,
	onChange,
	...marginProps
}: Props<T>): JSX.Element => {
	return (
		<RadioGroup
			value={value}
			onChange={(e) => onChange(e as T)}
			{...marginProps}
		>
			<Stack spacing={2}>
				{options.map(({ value, label }) => (
					<Radio key={label} value={value}>
						{label}
					</Radio>
				))}
			</Stack>
		</RadioGroup>
	);
};
