import type { NextPage } from 'next'
import  { ReactElement, ReactNode } from 'react'
import type { AppProps } from 'next/app'

import Head from 'next/head'
import Router from 'next/router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import 'src/theme/base.css'
import 'src/theme/global.css'
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';
import * as React from 'react';
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

interface EdenAppProps extends AppProps {
  pageProps: Record<string, unknown>
  Component: NextPageWithLayout
}

function EdenApp(props: EdenAppProps) {
  const { Component, pageProps } = props
  const getLayout = Component.getLayout ?? (page => page)

  Router.events.on('routeChangeStart', nProgress.start)
  Router.events.on('routeChangeError', nProgress.done)
  Router.events.on('routeChangeComplete', nProgress.done)

  return (
    <>
      <Head>
        <title>{'Eden'}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <main>
        {getLayout(<Component {...pageProps} />)}
      </main>
      {process.env.NODE_ENV === 'production' ? (
        <GoogleTagManager gtmId="GTM-MR2LV55Z" />
      ) : null}
      <Script
        src="https://rum-static.pingdom.net/pa-662f1da168cac40012000a8e.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded: https://rum-static.pingdom.net/pa-662f1da168cac40012000a8e.js`)
        }
      />
    </>
  )
}

export default EdenApp
