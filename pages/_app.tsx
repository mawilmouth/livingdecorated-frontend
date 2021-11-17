import type { AppProps } from 'next/app';
import { Fragment, useEffect } from 'react'
import { NextRouter, useRouter } from 'next/router'
import Script from 'next/script';
import env from '../constants/env';
import Gtag from '../lib/ga';

import '../styles/application.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const router: NextRouter = useRouter();

  function handleRouteChange (url: string): void {
    Gtag.pageview(url);
  }

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events])


  return (
    <Fragment>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${env.gaId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${env.gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
