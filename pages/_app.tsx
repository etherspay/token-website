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
        <meta
          name="description"
          content="$ETP is a utility token that powers the Etherspay ecosystem. It is used for governance, staking, and payments."
        />
        <meta
          property="og:title"
          content=" Etherspay | Unified Web3 solutions for the modern internet | $EPT"
        />
        <meta property="og:site_name" content="Etherspay Token $EPT" />
        <meta property="og:url" content="https://token.etherspay.com" />
        <meta
          property="og:description"
          content="$ETP is a utility token that powers the Etherspay ecosystem. It is used for governance, staking, and payments."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/eth-payment-gateway.appspot.com/assets/etherspay-logo.png"
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
