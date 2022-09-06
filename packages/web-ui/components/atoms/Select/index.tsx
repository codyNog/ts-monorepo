import { Select as CSelect } from "chakra-react-select";

type SelectOption<T> = T & { value: string | number; label: string };

type Props<T> = { options: SelectOption<T>[]; onChange: (value: T) => void };

export const Select = <T,>({ options, onChange }: Props<T>): JSX.Element => (
	<CSelect
		options={options}
		onChange={(e) => {
			const value = options.find((elem) => elem.value === e?.value);
			if (!value) {
				return;
			}
			onChange(value);
		}}
	/>
);
