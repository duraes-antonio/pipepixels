import { Nunito } from 'next/font/google';
import './globals.css';
import React, { ReactNode } from 'react';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import { ThemeProvider } from './shared/state/theme-provider';

const nunito = Nunito({
    weight: ['400', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
});

export default function RootLayout(props: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${nunito.className} antialiased`}>
                <div className="grid w-full">
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem>
                        <Header />
                        <main className="">{props.children}</main>
                        <Footer />
                    </ThemeProvider>
                </div>
            </body>
        </html>
    );
}
