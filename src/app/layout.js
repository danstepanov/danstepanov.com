
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import Providers from './Providers';

export const metadata = {
  title: 'Dan Stepanov',
  description: 'My crime is curiosity.',
  openGraph: {
    title: 'Dan Stepanov',
    description: 'My crime is curiosity.',
    url: 'https://onlydans.gg',
    images: {
      url: 'https://onlydans.gg/api/default',
      alt: 'Dan Stepanov',
      type: 'image/png',
      width: '1200',
      height: '630'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Dan Stepanov',
      description: 'My crime is curiosity.',
      images: {
        url: 'https://onlydans.gg/api/default',
      }
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-white dark:bg-black text-white dark:text-black">
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}