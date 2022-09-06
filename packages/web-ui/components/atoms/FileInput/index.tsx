import { FormLabel, Input } from "@chakra-ui/react";
import { MarginProps } from "../../style";
import { Center } from "../../layouts/Center";
import { Text } from "../Text";

type Props<T> =
	& MarginProps
	& {
		id: T;
		label: string;
		multiple?: boolean;
		onChange: (files: File[]) => void;
	};

export const FileInput = <T extends string>({
	onChange,
	id,
	label,
	multiple,
	...marginProps
}: Props<T>) => (
	<FormLabel
		m={0}
		{...marginProps}
		htmlFor={id}
		p={2}
		border={"1px solid"}
		borderColor={"inherit"}
		borderRadius={6}
	>
		<Center>
			<Text>{label}</Text>
		</Center>
		<Input
			id={id}
			type={"file"}
			onChange={(e) => {
				const { files } = e.currentTarget;
				const array = files ? Array.from(files) : [];
				onChange(array);
			}}
			multiple={multiple}
			display={"none"}
		/>
	</FormLabel>
);
