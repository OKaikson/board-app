"use client";

import {AppProps} from 'next/app';
import '../styles/global.scss';
import {Header} from '../components/Header/index';
import Provider from '../components/Provider/Provider';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Provider>
        <Header/>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
