
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

import { Libre_Baskerville } from '@next/font/google'

const baskerville = Libre_Baskerville({
	subsets: ['latin-ext'],
	weight: "400",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
			</head>
			<body className="bg-white dark:bg-black text-white dark:text-gray-500">
				<Providers>
					<main className={baskerville.className}>
						{children}
					</main>
				</Providers>
				<Analytics />
			</body>
		</html>
	)
}