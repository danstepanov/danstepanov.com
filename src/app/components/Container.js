"use client";
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'

import Footer from "./Footer";

export default function Container({ children }) {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme, resolvedTheme } = useTheme()


	useEffect(() => setMounted(true), [])

	if (!mounted) {
		return null
	}

	const pathname = usePathname();
	const router = useRouter();

	return (
		<div className="flex flex-1 flex-col bg-white dark:bg-black">
			<nav className={`flex ${pathname === '/' ? "justify-end" : "justify-between"} items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto`}>
				{pathname !== '/' && (
					<button aria-label="Toggle Dark Mode" type="button" className="flex flex-row rounded p-2 items-center justify-center" onClick={() => router.push('/')}>
						{mounted && (
							<div className='flex flex-row justify-center items-center'>
								<ChevronLeftIcon className="h-5 w-5 text-black dark:text-white" aria-hidden="true" />
								<p className="text-black dark:text-white ml-1 text-base mb-[2px]">okay that's enough</p>
							</div>
						)}
					</button>
				)}
				<button aria-label="Toggle Dark Mode" type="button" className="bg-gray-200 dark:bg-gray-800 rounded p-3 h-10 w-10 self-end" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
					{mounted && (
						<svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" className="h-4 w-4 text-gray-800 dark:text-white">
							{theme === 'dark' || resolvedTheme === 'dark' ? (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
							)}
						</svg>
					)}
				</button>
			</nav>
			<main className="flex flex-1 flex-col justify-between bg-white px-8 dark:bg-black">
				{children}
				<Footer />
			</main>
		</div>
	)
}