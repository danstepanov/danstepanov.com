"use client";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body className="bg-white dark:bg-black text-white dark:text-black">
            <ThemeProvider attribute="class">
                    {children}
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    )
}