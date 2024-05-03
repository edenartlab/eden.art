import * as React from 'react'

import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GoogleTagManager } from '@next/third-parties/google';
import Script from 'next/script';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {process.env.NODE_ENV === 'production' ? (
            <link rel="preconnect" href="https://www.googletagmanager.com" />
          ) : null}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {process.env.NODE_ENV === 'production' ? (
            <GoogleTagManager gtmId="G-W4718WCZQK" />
          ) : null}
          <Script
            src="https://rum-static.pingdom.net/pa-662f1da168cac40012000a8e.js"
            strategy="lazyOnload"
            onLoad={() =>
              console.log(`script loaded: https://rum-static.pingdom.net/pa-662f1da168cac40012000a8e.js`)
            }
          />
        </body>
      </Html>
    )
  }
}
