import {
	Tag as CTag,
	TagCloseButton,
	TagLabel,
	TagProps,
} from "@chakra-ui/react";

type Props = TagProps & { onClose?: () => void };

export const Tag = (props: Props): JSX.Element => {
	const { onClose } = props;

	return (
		<CTag {...props}>
			<TagLabel>{props.children}</TagLabel>
			{onClose && <TagCloseButton onClick={onClose} />}
		</CTag>
	);
};
