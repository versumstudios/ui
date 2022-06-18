import { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { globalCss } from '../styles/global';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  globalCss();

  return (
    <>
      <Head>
        <title>@versumstudio/ui</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
