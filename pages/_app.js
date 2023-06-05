import 'tailwindcss/tailwind.css'
import '@/styles/global.css'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Dan Stepanov</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
