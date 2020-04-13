import 'styles/index.scss';

import { Header } from 'components/Header';
import { AppProps } from 'next/app';
import React from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <section className="appBody">
      <Component {...pageProps} />
    </section>
  </>
);

export default MyApp;
