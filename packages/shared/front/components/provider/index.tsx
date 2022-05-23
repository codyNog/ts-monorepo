import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({});

type Props = {
  children: React.ReactNode;
};

export const ComponentProvider = ({ children }: Props) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export const InterplayProvider = ({ children }: Props) => (
  <ComponentProvider>
    <div style={{ height: "100%", width: "100%" }}>{children}</div>
  </ComponentProvider>
);
