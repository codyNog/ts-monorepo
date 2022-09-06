import {
	Modal as CModal,
	ModalBody,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";

type Props = {
	title?: string;
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, title, children }: Props) => (
	<CModal isOpen={isOpen} onClose={onClose}>
		<ModalOverlay />
		<ModalContent>
			{title && <ModalHeader>{title}</ModalHeader>}
			<ModalBody>{children}</ModalBody>
		</ModalContent>
	</CModal>
);
