/**
 * Dependencies
 */
import Document, { Head, Main, NextScript } from 'next/document'

/**
 * Internal
 */
import '../public/styles/layout.scss'

/**
 * Component
 */
export default class MyDocument extends Document {
  render () {
    return (
	    <html lang="en-US">
	    <Head>
		    <title>PixelThrone ¬ We build Premium WordPress Themes & Plugins</title>
		    <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
		    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>

		    <link rel="apple-touch-icon" sizes="180x180" href="/public/media/favicon/apple-touch-icon.png"/>
		    <link rel="icon" type="image/png" sizes="32x32" href="/public/media/favicon/favicon-32x32.png"/>
		    <link rel="icon" type="image/png" sizes="16x16" href="/public/media/favicon/favicon-16x16.png"/>
		    <link rel="manifest" href="/public/media/favicon/site.webmanifest"/>
		    <meta name="apple-mobile-web-app-title" content="PixelThrone"/>
		    <meta name="application-name" content="PixelThrone"/>
		    <meta name="msapplication-TileColor" content="#FFBB02"/>
		    <meta name="theme-color" content="#FFBB02"/>
	    </Head>
	    <body>
		    <Main/>
		    <NextScript/>
	    </body>
	    </html>
    )
  }
}
