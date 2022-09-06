import { AsyncSelect } from "chakra-react-select";

type AutoCompleteOption = { label: string; value: string | number };

type Props<T> = {
	id: string;
	onChange: (value: T) => void;
	loadOptions: (value: string) => Promise<T[]>;
};

export const AutoComplete = <T extends AutoCompleteOption>({
	id,
	onChange,
	loadOptions,
}: Props<T>): JSX.Element => (
	<AsyncSelect
		id={id}
		loadOptions={loadOptions}
		onChange={(e) => {
			onChange(e as T);
		}}
		chakraStyles={{
			menu: (provided) => ({ ...provided, position: "relative" }),
		}}
	/>
);
