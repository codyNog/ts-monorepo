import { useState } from "react";
import { RadioOption, Radios as Component } from ".";

export default { title: "atoms/Radios" };

export const Radios = () => {
	const [value, setValue] = useState("foo");
	const options: RadioOption<string>[] = [
		{ value: "foo", label: "foo" },
		{ value: "bar", label: "bar" },
	];

	return <Component value={value} options={options} onChange={setValue} />;
};
