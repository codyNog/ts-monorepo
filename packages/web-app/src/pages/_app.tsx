import type { AppProps } from "next/app";
import { ComponentProvider } from "@web/ui/components";

// require("~/libs/msw");

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ComponentProvider>
      <Component {...pageProps} />
    </ComponentProvider>
  );
}

export default MyApp;
