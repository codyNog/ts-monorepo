import {
	NumberInput as CNumberInput,
	NumberDecrementStepper,
	NumberIncrementStepper,
	NumberInputField,
	NumberInputProps,
	NumberInputStepper,
} from "@chakra-ui/react";

type Props = Omit<NumberInputProps, "value"> & {
	value: number;
	onChange: (value: number) => void;
};

export const NumberInput = ({
	value,
	onChange,
	...numberInputProps
}: Props) => (
	<CNumberInput
		value={value}
		onChange={(_s, n: number) => {
			if (Number.isNaN(n)) {
				onChange(0);
				return;
			}
			onChange(n);
		}}
		{...numberInputProps}
	>
		<NumberInputField value={value} />
		<NumberInputStepper>
			<NumberIncrementStepper />
			<NumberDecrementStepper />
		</NumberInputStepper>
	</CNumberInput>
);
