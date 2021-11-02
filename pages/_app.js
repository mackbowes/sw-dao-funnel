import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Future Of Defi Has A Waitlist...</title>
        <link rel="shortcut icon" href="/images/SWMark.png" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/ndo3qhu.css"
        ></link>
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
