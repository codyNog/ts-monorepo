import { Select as CSelect } from "chakra-react-select";

type Option<T> = T & { value: string | number; label: string };

type Props<T> = { options: Option<T>[]; onChange: (value: T[]) => void };

export const MultiSelect = <T,>({
	options,
	onChange,
}: Props<T>): JSX.Element => (
	<CSelect
		options={options}
		onChange={(v) => {
			const value: T[] = [...v];
			onChange(value);
		}}
		isMulti
	/>
);
