import type {AppProps} from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import {Normalize} from 'styled-normalize';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

SwiperCore.use([Pagination]);

import {MainLayout} from 'components/Layouts';
import {GlobalStyle} from 'components/Global/layout';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <meta name="apple-mobile-web-app-title" content="Nyoka" />
        <meta name="application-name" content="Nyoka" />
        <meta name="msapplication-TileColor" content="#3C69B4" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" />
      </Head>
      <Script
        id="ym-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(89913153, "init", {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true
            });
          `
        }}
      />
      <GlobalStyle />
      <MainLayout>
        <Normalize />
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
