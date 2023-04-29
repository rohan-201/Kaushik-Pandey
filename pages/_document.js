import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="light">
      <Head>
        <html data-theme="light" />
        <meta
          name="Kaushik Pandey"
          content="i am marketer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
