"use client";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Dan Stepanov</title>
        <meta
          property="description"
          content="My crime is curiosity."
          key={'description'}
        />
        <meta
          property="og:title"
          content="Dan Stepanov"
          key={'ogtitle'}
        />
        <meta
          property="og:description"
          content="My crime is curiosity."
          key={'ogdescription'}
        />
        <meta
          property="og:url"
          content="https://onlydans.gg"
          key={'ogurl'}
        />
        <meta
          property="og:image"
          content="https://onlydans.gg/api/default"
          key={'ogimage'}
        />
        <meta
          property="og:image:alt"
          content="Dan Stepanov"
          key={'ogimagealt'}
        />
        <meta
          property="og:image:type"
          content="image/png"
          key={'ogimagetype'}
        />
        <meta
          property="og:image:width"
          content="1200"
          key={'ogimagewidth'}
        />
        <meta
          property="og:image:height"
          content="630"
          key={'ogimageheight'}
        />
        <meta
          property="twitter:image"
          content="https://onlydans.gg/api/default"
          key={'twitterimage'}
        />
        <meta
          property="twitter:card" content="summary_large_image"
          key={'twittercard'}
        />
        <meta
          property="twitter:title"
          content="Dan Stepanov"
          key='twittertitle'
        />
        <meta
          property="twitter:description"
          content="My crime is curiosity."
          key="twitterdescription"
        />
      </head>
      <body className="bg-white dark:bg-black text-white dark:text-black">
        <ThemeProvider attribute="class">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}