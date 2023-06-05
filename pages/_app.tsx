import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>
          Etherspay | Unified Web3 solutions for the modern internet | $EPT
        </title>

        <link rel="icon" href="/etherspay.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          primaryColor: "teal",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
