import 'tailwindcss/tailwind.css'
import '@/styles/global.css'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <Head><title>Dan Stepanov</title></Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
