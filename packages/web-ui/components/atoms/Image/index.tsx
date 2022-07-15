import { Image as CImage, ImageProps, Img as CImg } from "@chakra-ui/react";

type Props = ImageProps & { isSSR?: boolean };

export const Image = (props: Props) => {
	const { isSSR, ...imageProps } = props;
	if (isSSR) {
		return <CImg {...imageProps} />;
	}
	return <CImage {...imageProps} />;
};
