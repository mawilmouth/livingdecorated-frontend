import type { AppProps } from 'next/app';

import '../styles/application.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp;
